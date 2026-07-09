export interface Player {
  id: string;
  name: string;
  avatar?: string;
  matches: number;
  wins: number;
  losses: number;
  noResults: number;
  points: number;
}

export interface Group {
  id: string;
  name: string;
  players: Player[];
}

export interface Match {
  id: string;
  date: string;
  round?: 'quarterfinal' | 'semifinal' | 'final' | 'third_place';

  stage: 'group' | 'knockout';
  status: 'scheduled' | 'completed';
  groupId?: string;
  bracketId?: string;

  player1: {
    id: string;
    name: string;
    avatar?: string;
    score: number[];
  };

  player2: {
    id: string;
    name: string;
    avatar?: string;
    score: number[];
  };

  winner: string;
  isWalkover: boolean;
}

export interface MatchResult {
  id: string;
  player1: {
    id: string;
    name: string;
    avatar?: string;
    score: number[];
  };
  player2: {
    id: string;
    name: string;
    avatar?: string;
    score: number[];
  };
  date: string;
  group?: string;
  round?: string;
  winner: string;
}

export interface Highlight {
  id: string;
  type: 'image' | 'video';
  url: string;
}

// export interface KnockoutMatch {
//   id: string;
//   round: 'quarterfinal' | 'semifinal' | 'final' | 'third_place';
//   position: number;
//   player1: {
//     id: string;
//     name: string;
//     score: number[],
//     avatar?: string;
//   } | null;
//   player2: {
//     id: string;
//     name: string;
//     score: number[],
//     avatar?: string;
//   } | null;
//   winner?: string;
//   date?: string;
//   time?: string;
// }

// export interface KnockoutRound {
//   name: string;
//   matches: KnockoutMatch[];
// }

// --- Multi-season support ---

// Master roster entry: canonical identity for a player, reused across seasons.
export interface PlayerProfile {
  id: string;
  name: string;
  avatar?: string;
}

export interface SeasonMeta {
  id: string;
  name: string;
  year: number;
  order: number;
  groupStageSets: number; 
  knockoutStageSets: number;
  finalsSets: number;
  playersPerGroup: number;
  qualifiersPerGroup: number;
}

// Everything a season's pages need, fetched as one document.
export interface SeasonData {
  meta: SeasonMeta;
  groups: Group[];
  matches: Match[];
  highlights: Highlight[];
}

export interface AppConfig {
  latestSeasonId: string;
  seasons: SeasonMeta[];
}