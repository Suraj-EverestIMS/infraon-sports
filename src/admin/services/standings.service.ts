import type { SeasonData } from "../../types";

export function recalculateSeason(season: SeasonData): SeasonData {
  const updatedSeason = structuredClone(season);

  // Reset all player stats
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

    const group = updatedSeason.groups.find((g) => g.id === match.groupId);

    if (!group) return;

    const player1 = group.players.find((p) => p.id === match.player1.id);

    const player2 = group.players.find((p) => p.id === match.player2.id);

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

    if (match.status === "completed") {
      if (match.winner === player1.id) {
        player1.wins++;
        player1.points += 2;

        player2.losses++;
      } else if (match.winner === player2.id) {
        player2.wins++;
        player2.points += 2;

        player1.losses++;
      }
    }
  });

  // Sort every group
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

  // Get groups
  const groupA = updatedSeason.groups.find((g) => g.id === "group-a");
  const groupB = updatedSeason.groups.find((g) => g.id === "group-b");
  const groupC = updatedSeason.groups.find((g) => g.id === "group-c");
  const groupD = updatedSeason.groups.find((g) => g.id === "group-d");

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

  function getMatch(id: string) {
    return updatedSeason.matches.find((m) => m.id === id);
  }

  const qf1 = getMatch("qf1");
  const qf2 = getMatch("qf2");
  const qf3 = getMatch("qf3");
  const qf4 = getMatch("qf4");

  if (qf1) {
    qf1.player1 = {
      ...A1,
      score: [],
    };

    qf1.player2 = {
      ...D2,
      score: [],
    };
  }

  if (qf2) {
    qf2.player1 = {
      ...B1,
      score: [],
    };

    qf2.player2 = {
      ...C2,
      score: [],
    };
  }

  if (qf3) {
    qf3.player1 = {
      ...C1,
      score: [],
    };

    qf3.player2 = {
      ...B2,
      score: [],
    };
  }

  if (qf4) {
    qf4.player1 = {
      ...D1,
      score: [],
    };

    qf4.player2 = {
      ...A2,
      score: [],
    };
  }

  return updatedSeason;
}
