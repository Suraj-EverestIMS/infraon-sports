import type { Match, Player, SeasonData } from "../../types";

export function recalculateSeason(season: SeasonData): SeasonData {
  const updatedSeason = structuredClone(season);

  // Reset group standings
  updatedSeason.groups.forEach((group) => {
    group.players.forEach((player) => {
      player.matches = 0;
      player.wins = 0;
      player.losses = 0;
      player.noResults = 0;
      player.points = 0;
    });
  });

  // Recalculate group standings
  updatedSeason.matches.forEach((match) => {
    if (match.stage !== "group") return;

    if (match.status === "scheduled") return;

    const group = updatedSeason.groups.find(
      (g) => g.id === match.groupId
    );

    if (!group) return;

    const player1 = group.players.find(
      (p) => p.id === match.player1.id
    );

    const player2 = group.players.find(
      (p) => p.id === match.player2.id
    );

    if (!player1 || !player2) return;

    player1.matches++;
    player2.matches++;

    if (match.status === "walkover") {
      if (match.winner === player1.id) {
        player1.wins++;
        player1.points += 2;
        player2.losses++;
      } else if (match.winner === player2.id) {
        player2.wins++;
        player2.points += 2;
        player1.losses++;
      } else {
        player1.noResults++;
        player2.noResults++;
      }

      return;
    }

    if (match.winner === player1.id) {
      player1.wins++;
      player1.points += 2;
      player2.losses++;
    } else if (match.winner === player2.id) {
      player2.wins++;
      player2.points += 2;
      player1.losses++;
    }
  });

  // Sort groups
  updatedSeason.groups.forEach((group) => {
    group.players.sort((a, b) => {
      if (b.points !== a.points) {
        return b.points - a.points;
      }

      if (b.wins !== a.wins) {
        return b.wins - a.wins;
      }

      return a.name.localeCompare(b.name);
    });
  });

  const groupA = updatedSeason.groups.find(
    (g) => g.id === "group-a"
  );

  const groupB = updatedSeason.groups.find(
    (g) => g.id === "group-b"
  );

  const groupC = updatedSeason.groups.find(
    (g) => g.id === "group-c"
  );

  const groupD = updatedSeason.groups.find(
    (g) => g.id === "group-d"
  );

  if (!groupA || !groupB || !groupC || !groupD) {
    return updatedSeason;
  }

  const A1 = groupA.players[0];
  const A2 = groupA.players[1];

  const B1 = groupB.players[0];
  const B2 = groupB.players[1];

  const C1 = groupC.players[0];
  const C2 = groupC.players[1];

  const D1 = groupD.players[0];
  const D2 = groupD.players[1];

  function getMatch(id: string): Match | undefined {
    return updatedSeason.matches.find((m) => m.id === id);
  }

  function clonePlayer(player: Player) {
    return {
      id: player.id,
      name: player.name,
      avatar: player.avatar,
      score: [],
    };
  }

  function setPlayers(
    matchId: string,
    player1: Player,
    player2: Player
  ) {
    const match = getMatch(matchId);

    if (!match) return;

    // Never overwrite a finished knockout match
    if (match.status !== "scheduled") return;

    match.player1 = clonePlayer(player1);
    match.player2 = clonePlayer(player2);
  }

  function getWinner(match: Match) {
    if (
      match.status !== "completed" &&
      match.status !== "walkover"
    ) {
      return null;
    }

    if (!match.winner) return null;

    return match.winner === match.player1.id
      ? match.player1
      : match.player2;
  }

  function getLoser(match: Match) {
    if (
      match.status !== "completed" &&
      match.status !== "walkover"
    ) {
      return null;
    }

    if (!match.winner) return null;

    return match.winner === match.player1.id
      ? match.player2
      : match.player1;
  }

    function advanceWinner(
    sourceMatchId: string,
    targetMatchId: string,
    targetPlayer: "player1" | "player2"
  ) {
    const source = getMatch(sourceMatchId);
    const target = getMatch(targetMatchId);

    if (!source || !target) return;

    // Don't overwrite a match that's already been played
    if (target.status !== "scheduled") return;

    const winner = getWinner(source);

    if (!winner) return;

    target[targetPlayer] = {
      ...winner,
      score: [],
    };
  }

  function advanceLoser(
    sourceMatchId: string,
    targetMatchId: string,
    targetPlayer: "player1" | "player2"
  ) {
    const source = getMatch(sourceMatchId);
    const target = getMatch(targetMatchId);

    if (!source || !target) return;

    if (target.status !== "scheduled") return;

    const loser = getLoser(source);

    if (!loser) return;

    target[targetPlayer] = {
      ...loser,
      score: [],
    };
  }

  // -------------------------------
  // Populate Quarter Finals
  // -------------------------------

  setPlayers("qf1", A1, D2);
  setPlayers("qf2", B1, C2);
  setPlayers("qf3", C1, B2);
  setPlayers("qf4", D1, A2);

  // -------------------------------
  // Quarter Finals -> Semi Finals
  // -------------------------------

  advanceWinner("qf1", "sf1", "player1");
  advanceWinner("qf2", "sf1", "player2");

  advanceWinner("qf3", "sf2", "player1");
  advanceWinner("qf4", "sf2", "player2");

    // -------------------------------
  // Semi Finals -> Final
  // -------------------------------

  advanceWinner("sf1", "f1", "player1");
  advanceWinner("sf2", "f1", "player2");

  // -------------------------------
  // Semi Finals -> Third Place
  // -------------------------------

  advanceLoser("sf1", "tp", "player1");
  advanceLoser("sf2", "tp", "player2");

  // -------------------------------
  // Reset invalid knockout matches
  // -------------------------------

  updatedSeason.matches.forEach((match) => {
    if (match.stage !== "knockout") return;

    if (match.status !== "scheduled") return;

    match.winner = "";
    match.isWalkover = false;

    match.player1.score = [];
    match.player2.score = [];
  });

    // -------------------------------
  // Clear downstream matches if an earlier match is reverted
  // -------------------------------

  const progression = [
    ["qf1", "sf1", "player1"],
    ["qf2", "sf1", "player2"],
    ["qf3", "sf2", "player1"],
    ["qf4", "sf2", "player2"],
    ["sf1", "f1", "player1"],
    ["sf2", "f1", "player2"],
    ["sf1", "tp", "player1"],
    ["sf2", "tp", "player2"],
  ] as const;

  progression.forEach(([sourceId, targetId, targetPlayer]) => {
    const source = getMatch(sourceId);
    const target = getMatch(targetId);

    if (!source || !target) return;

    if (target.status !== "scheduled") return;

    if (
      source.status === "scheduled" ||
      !source.winner
    ) {
      target[targetPlayer] = {
        id: "",
        name: "TBD",
        avatar: "",
        score: [],
      };
    }
  });

  return updatedSeason;
}