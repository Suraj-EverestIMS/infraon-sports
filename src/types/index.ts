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
  player1: {
    id: string;
    name: string;
    avatar?: string;
    score?: number[];
  };
  player2: {
    id: string;
    name: string;
    avatar?: string;
    score?: number[];
  };
  date: string;
  time?: string;
  group?: string;
  round?: string;
  winner?: string;
  isCompleted: boolean;
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
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  date: string;
}

export interface KnockoutMatch {
  id: string;
  round: 'quarterfinal' | 'semifinal' | 'final' | 'third_place';
  position: number;
  player1: {
    id: string;
    name: string;
    score: number[],
    avatar?: string;
  } | null;
  player2: {
    id: string;
    name: string;
    score: number[],
    avatar?: string;
  } | null;
  winner?: string;
  date?: string;
  time?: string;
}

export interface KnockoutRound {
  name: string;
  matches: KnockoutMatch[];
}