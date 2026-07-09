// NOTE: No longer imported anywhere in the app - data now lives in Firestore
// (see src/hooks/useSeasonData.ts). Kept here only as the source this file's
// content was copied into scripts/migrate.mjs from, and as a local fallback
// reference. Safe to delete once you've confirmed the Firebase setup works.
import { Group, Highlight, KnockoutMatch, Match, MatchResult } from '../types';

export const groups: Group[] = [
  {
    id: 'group-a',
    name: 'Group A',
    players: [
      { id: 'p1', name: 'Abhirup', matches: 2, wins: 2, losses: 0, noResults: 1, points: 4, avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' },
      { id: 'p2', name: 'Shikar S', matches: 3, wins: 2, losses: 1, noResults: 0, points: 4, avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/shikar.png' },
      { id: 'p3', name: 'Krishna', matches: 1, wins: 0, losses: 1, noResults: 2, points: 0, avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/krishna.png' },
      { id: 'p4', name: 'Bharath R', matches: 2, wins: 0, losses: 2, noResults: 1, points: 0, avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' },
    ],
  },
  {
    id: 'group-b',
    name: 'Group B',
    players: [
      { id: 'p5', name: 'Kishore A', matches: 3, wins: 3, losses: 0, noResults: 0, points: 6, avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/kishore.png' },
      { id: 'p6', name: 'Prajwal K S', matches: 3, wins: 2, losses: 1, noResults: 0, points: 4, avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/prajwal.png' },
      { id: 'p7', name: 'Vijaykumar S', matches: 3, wins: 1, losses: 2, noResults: 0, points: 2, avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' },
      { id: 'p8', name: 'Hemantahn C', matches: 3, wins: 0, losses: 3, noResults: 0, points: 0, avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' },
    ],
  },
  {
    id: 'group-c',
    name: 'Group C',
    players: [
      { id: 'p9', name: 'Pavan C', matches: 3, wins: 3, losses: 0, noResults: 0, points: 6, avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/pavan.png' },
      { id: 'p10', name: 'Murugan', matches: 3, wins: 2, losses: 1, noResults: 0, points: 4, avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/murugan.png' },
      { id: 'p11', name: 'Ranjith Kumar', matches: 3, wins: 1, losses: 2, noResults: 0, points: 2, avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' },
      { id: 'p12', name: 'Prashanth S', matches: 3, wins: 0, losses: 3, noResults: 0, points: 0, avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/prashant.png' },
    ],
  },
  {
    id: 'group-d',
    name: 'Group D',
    players: [
      { id: 'p13', name: 'Simon', matches: 3, wins: 3, losses: 0, noResults: 0, points: 6, avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/simon.png' },
      { id: 'p14', name: 'Suraj Niyogi', matches: 3, wins: 2, losses: 1, noResults: 0, points: 4, avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/suraj.png' },
      { id: 'p15', name: 'Iranna', matches: 3, wins: 1, losses: 2, noResults: 0, points: 2, avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/iranna.png' },
      { id: 'p16', name: 'Nagaraju', matches: 3, wins: 0, losses: 3, noResults: 0, points: 0, avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/nagaraju.png' },
    ],
  },
];

// Semi Final 2 (k5) and the Final (k7) have already been played and recorded
// under `knockoutMatches` below, so they are intentionally not listed here.
// Add new entries here only for matches that haven't been played yet.
export const upcomingMatches: Match[] = [];

export const previousMatches: MatchResult[] = [
  {
    id: 'pm1',
    player1: { id: 'p1', name: 'Abhirup', score: [11, 11, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' },
    player2: { id: 'p2', name: 'Shikar S', score: [9, 7, 7], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/shikar.png' },
    date: '2025-06-01',
    group: 'Group A',
    winner: 'p1',
  },
  {
    id: 'pm2',
    player1: { id: 'p1', name: 'Abhirup', score: [], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' },
    player2: { id: 'p3', name: 'Krishna', score: [], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/krishna.png' },
    date: '2025-06-01',
    group: 'Group A',
    winner: '',
  },
  {
    id: 'pm3',
    player1: { id: 'p1', name: 'Abhirup ', score: [11, 11, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' },
    player2: { id: 'p4', name: 'Bharath R', score: [1, 3, 5], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' },
    date: '2025-06-01',
    group: 'Group A',
    winner: 'p1',
  },
  {
    id: 'pm4',
    player1: { id: 'p2', name: 'Shikar S', score: [11, 11, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/shikar.png' },
    player2: { id: 'p3', name: 'Krishna', score: [5, 5, 4], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/krishna.png' },
    date: '2025-06-01',
    group: 'Group A',
    winner: 'p2',
  },
  {
    id: 'pm5',
    player1: { id: 'p2', name: 'Shikar S', score: [11, 11, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/shikar.png' },
    player2: { id: 'p4', name: 'Bharath R', score: [5, 2, 7], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' },
    date: '2025-06-02',
    group: 'Group A',
    winner: 'p2',
  },
  {
    id: 'pm6',
    player1: { id: 'p3', name: 'Krishna', score: [], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/krishna.png' },
    player2: { id: 'p4', name: 'Bharath R', score: [], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' },
    date: '2025-06-02',
    group: 'Group A',
    winner: '',
  },
  {
    id: 'pm7',
    player1: { id: 'p5', name: 'Kishore A', score: [11, 11, 5, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/kishore.png' },
    player2: { id: 'p6', name: 'Prajwal K S', score: [3, 4, 11, 8], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/prajwal.png' },
    date: '2025-06-02',
    group: 'Group B',
    winner: 'p5',
  },
  {
    id: 'pm8',
    player1: { id: 'p6', name: 'Prajwal K S', score: [11, 11, 8, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/prajwal.png' },
    player2: { id: 'p8', name: 'Hemanathan C', score: [3, 3, 11, 1], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' },
    date: '2025-06-02',
    group: 'Group B',
    winner: 'p6',
  },
  {
    id: 'pm9',
    player1: { id: 'p6', name: 'Prajwal K S', score: [11, 11, 8, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/prajwal.png' },
    player2: { id: 'p7', name: 'Vijaykumar S', score: [7, 9, 11, 2], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' },
    date: '2025-06-03',
    group: 'Group B',
    winner: 'p6',
  },
  {
    id: 'pm10',
    player1: { id: 'p5', name: 'Kishore A', score: [11, 11, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/kishore.png' },
    player2: { id: 'p8', name: 'Hemanathan C', score: [5, 4, 3], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' },
    date: '2025-06-03',
    group: 'Group B',
    winner: 'p5',
  },
  {
    id: 'pm11',
    player1: { id: 'p8', name: 'Hemanathan C', score: [2, 4, 1], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' },
    player2: { id: 'p7', name: 'Vijaykumar S', score: [11, 11, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' },
    date: '2025-06-03',
    group: 'Group B',
    winner: 'p7',
  },
  {
    id: 'pm12',
    player1: { id: 'p5', name: 'Kishore A', score: [10, 11, 11, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/kishore.png' },
    player2: { id: 'p7', name: 'Vijaykumar S', score: [12, 8, 2, 7], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' },
    date: '2025-06-03',
    group: 'Group B',
    winner: 'p5',
  },
  {
    id: 'pm13',
    player1: { id: 'p10', name: 'Murugan', score: [7, 11, 12, 6, 5], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/murugan.png' },
    player2: { id: 'p9', name: 'Pavan C', score: [11, 9, 10, 11, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/pavan.png' },
    date: '2025-06-04',
    group: 'Group C',
    winner: 'p9',
  },
  {
    id: 'pm14',
    player1: { id: 'p10', name: 'Murugan', score: [11, 11, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/murugan.png' },
    player2: { id: 'p12', name: 'Prashanth S', score: [4, 7, 3], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/prashant.png' },
    date: '2025-06-04',
    group: 'Group C',
    winner: 'p10',
  },
  {
    id: 'pm15',
    player1: { id: 'p10', name: 'Murugan', score: [11, 12, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/murugan.png' },
    player2: { id: 'p11', name: 'Ranjith Kumar', score: [4, 10, 5], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' },
    date: '2025-06-04',
    group: 'Group C',
    winner: 'p10',
  },
  {
    id: 'pm16',
    player1: { id: 'p9', name: 'Pavan C', score: [11, 14, 16], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/pavan.png' },
    player2: { id: 'p12', name: 'Prashanth S', score: [8, 12, 14], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/prashant.png' },
    date: '2025-06-04',
    group: 'Group C',
    winner: 'p9',
  },
  {
    id: 'pm17',
    player1: { id: 'p9', name: 'Pavan C', score: [11, 12, 6, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/pavan.png' },
    player2: { id: 'p11', name: 'Ranjith Kumar', score: [2, 10, 11, 5], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' },
    date: '2025-06-04',
    group: 'Group C',
    winner: 'p9',
  },
  {
    id: 'pm18',
    player1: { id: 'p12', name: 'Prashanth S', score: [7, 11, 6, 1], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/prashant.png' },
    player2: { id: 'p11', name: 'Ranjith Kumar', score: [11, 6, 11, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' },
    date: '2025-06-04',
    group: 'Group C',
    winner: 'p11',
  },
  {
    id: 'pm19',
    player1: { id: 'p13', name: 'Simon', score: [11, 11, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/simon.png' },
    player2: { id: 'p14', name: 'Suraj Niyogi', score: [9, 3, 9], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/suraj.png' },
    date: '2025-06-04',
    group: 'Group D',
    winner: 'p13',
  },
  {
    id: 'pm20',
    player1: { id: 'p13', name: 'Simon', score: [11, 11, 8, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/simon.png' },
    player2: { id: 'p16', name: 'Nagaraju N', score: [9, 6, 11, 5], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/nagaraju.png' },
    date: '2025-06-04',
    group: 'Group D',
    winner: 'p13',
  },
  {
    id: 'pm21',
    player1: { id: 'p13', name: 'Simon', score: [9, 11, 11, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/simon.png' },
    player2: { id: 'p15', name: 'Iranna', score: [11, 7, 7, 8], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/iranna.png' },
    date: '2025-06-04',
    group: 'Group D',
    winner: 'p13',
  },
  {
    id: 'pm22',
    player1: { id: 'p14', name: 'Suraj Niyogi', score: [11, 11, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/suraj.png' },
    player2: { id: 'p16', name: 'Nagaraju N', score: [1, 6, 4], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/nagaraju.png' },
    date: '2025-06-04',
    group: 'Group D',
    winner: 'p14',
  },
  {
    id: 'pm23',
    player1: { id: 'p14', name: 'Suraj Niyogi', score: [11, 6, 11, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/suraj.png' },
    player2: { id: 'p15', name: 'Iranna', score: [6, 11, 8, 6], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/iranna.png' },
    date: '2025-06-04',
    group: 'Group D',
    winner: 'p14',
  },
  {
    id: 'pm24',
    player1: { id: 'p16', name: 'Nagaraju N', score: [8, 2, 6], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/nagaraju.png' },
    player2: { id: 'p15', name: 'Iranna', score: [11, 11, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/iranna.png' },
    date: '2025-06-04',
    group: 'Group D',
    winner: 'p15',
  }
];

export const highlights: Highlight[] = [
  {
    id: 'h1',
    title: 'Maria Rodriguez\'s incredible comeback',
    description: 'Down 0-2 in sets, Maria staged an amazing comeback to win 3-2 against John Smith.',
    imageUrl: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/WhatsApp+Image+2025-04-22+at+19.25.16_2754f97e.jpg',
    date: '2025-06-02',
  },
  {
    id: 'h2',
    title: 'Raj Patel breaks tournament record',
    description: 'Raj hit the fastest recorded smash in tournament history at 112 km/h!',
    imageUrl: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/WhatsApp+Image+2025-04-23+at+19.09.53_de743521.jpg',
    date: '2025-06-03',
  },
  {
    id: 'h3',
    title: 'Sophie Park\'s perfect group stage',
    description: 'Sophie didn\'t drop a single set in her group stage matches, advancing with a perfect record.',
    imageUrl: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/WhatsApp+Image+2025-04-23+at+19.09.54_be450e5d.jpg',
    date: '2025-06-04',
  },
  {
    id: 'h4',
    title: 'Epic rally between Alex and Luis',
    description: 'A 47-shot rally had the crowd on their feet as Alex and Luis battled for a crucial point.',
    imageUrl: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/WhatsApp+Image+2025-04-23+at+19.09.54_f58abe2f.jpg',
    date: '2025-06-05',
  },
  {
    id: 'h5',
    title: 'Maria Rodriguez\'s incredible comeback',
    description: 'Down 0-2 in sets, Maria staged an amazing comeback to win 3-2 against John Smith.',
    imageUrl: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/WhatsApp+Video+2025-04-21+at+19.00.53_94804307.mp4',
    date: '2025-06-02',
  },
  {
    id: 'h6',
    title: 'Raj Patel breaks tournament record',
    description: 'Raj hit the fastest recorded smash in tournament history at 112 km/h!',
    imageUrl: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/WhatsApp+Video+2025-04-22+at+19.25.39_83bbee54.mp4',
    date: '2025-06-03',
  },
  {
    id: 'h7',
    title: 'Sophie Park\'s perfect group stage',
    description: 'Sophie didn\'t drop a single set in her group stage matches, advancing with a perfect record.',
    imageUrl: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/WhatsApp+Video+2025-04-23+at+19.09.47_2178c805.mp4',
    date: '2025-06-04',
  },
  {
    id: 'h8',
    title: 'Epic rally between Alex and Luis',
    description: 'A 47-shot rally had the crowd on their feet as Alex and Luis battled for a crucial point.',
    imageUrl: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/WhatsApp+Video+2025-04-23+at+19.09.50_0d6ed718.mp4',
    date: '2025-06-05',
  },
  {
    id: 'h9',
    title: 'Maria Rodriguez\'s incredible comeback',
    description: 'Down 0-2 in sets, Maria staged an amazing comeback to win 3-2 against John Smith.',
    imageUrl: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/WhatsApp+Video+2025-04-25+at+17.31.33_82864d99.mp4',
    date: '2025-06-02',
  },
  {
    id: 'h10',
    title: 'Raj Patel breaks tournament record',
    description: 'Raj hit the fastest recorded smash in tournament history at 112 km/h!',
    imageUrl: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/WhatsApp+Video+2025-04-25+at+20.01.50_3c9bdc06.mp4',
    date: '2025-06-03',
  },
  {
    id: 'h11',
    title: 'Sophie Park\'s perfect group stage',
    description: 'Sophie didn\'t drop a single set in her group stage matches, advancing with a perfect record.',
    imageUrl: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/WhatsApp+Video+2025-04-25+at+20.01.54_40c22ed3.mp4',
    date: '2025-06-04',
  },
  {
    id: 'h12',
    title: 'Epic rally between Alex and Luis',
    description: 'A 47-shot rally had the crowd on their feet as Alex and Luis battled for a crucial point.',
    imageUrl: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/WhatsApp+Video+2025-04-25+at+20.01.59_332940e7.mp4',
    date: '2025-06-05',
  },
  {
    id: 'h13',
    title: 'Sophie Park\'s perfect group stage',
    description: 'Sophie didn\'t drop a single set in her group stage matches, advancing with a perfect record.',
    imageUrl: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/WhatsApp+Video+2025-04-25+at+20.02.03_7376a306.mp4',
    date: '2025-06-04',
  },
  {
    id: 'h14',
    title: 'Epic rally between Alex and Luis',
    description: 'A 47-shot rally had the crowd on their feet as Alex and Luis battled for a crucial point.',
    imageUrl: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/WhatsApp+Video+2025-04-28+at+20.37.05_199a0113.mp4',
    date: '2025-06-05',
  },
];

export const knockoutMatches: KnockoutMatch[] = [
  // Quarterfinals
  {
    id: 'k1',
    round: 'quarterfinal',
    position: 1,
    player1: { id: 'p1', name: 'Abhirup', score: [11, 11, 11, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' }, // A1
    player2: { id: 'p14', name: 'Suraj Niyogi', score: [5, 8, 6, 5], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/suraj.png' }, // D2
    date: '2025-06-12',
    time: '14:00',
    winner: 'p1',
  },
  {
    id: 'k2',
    round: 'quarterfinal',
    position: 3,
    player1: { id: 'p5', name: 'Kishore A (withdrawn)', score: [], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/kishore.png' }, // B1
    player2: { id: 'p10', name: 'Murugan', score: [], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/murugan.png' }, // C2
    date: '2025-06-13',
    time: '14:00',
    winner: '',
  },
  {
    id: 'k3',
    round: 'quarterfinal',
    position: 2,
    player1: { id: 'p2', name: 'Shikar S', score: [8, 11, 11, 14, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/shikar.png' }, // A2
    player2: { id: 'p13', name: 'Simon', score: [8, 9, 12, 9], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/simon.png' }, // D1
    date: '2025-06-12',
    time: '16:30',
    winner: 'p2',
  },
  {
    id: 'k4',
    round: 'quarterfinal',
    position: 4,
    player1: { id: 'p6', name: 'Prajwal K S', score: [11, 10, 11, 11, 12, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/prajwal.png' }, // B2
    player2: { id: 'p9', name: 'Pavan C', score: [9, 12, 4, 5, 14, 8], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/pavan.png' }, // C1
    date: '2025-06-13',
    time: '16:30',
    winner: 'p6',
  },
  
  // Semifinals
  {
    id: 'k5',
    round: 'semifinal',
    position: 1,
    player1: { id: 'p1', name: 'Abhirup', score: [11, 11, 11, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' }, // QF1 winner
    player2: { id: 'p10', name: 'Murugan', score: [8, 9, 6, 7], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/murugan.png' }, // QF2 winner
    date: '2025-06-15',
    time: '15:00',
    winner: 'p1',
  },
  {
    id: 'k6',
    round: 'semifinal',
    position: 2,
    player1: { id: 'p6', name: 'Prajwal K S', score: [7, 6, 6, 11, 11, 11, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/prajwal.png' }, // QF3 winner
    player2: { id: 'p2', name: 'Shikar S', score: [11, 11, 11, 6, 8, 7, 7], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/shikar.png' }, // QF4 winner
    date: '2025-06-15',
    time: '17:30',
    winner: 'p6',
  },
  
  // Final
  {
    id: 'k7',
    round: 'final',
    position: 1,
    player1: { id: 'p1', name: 'Abhirup', score: [11, 11, 7, 6, 6, 11, 11], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' }, // QF1 winner
    player2: { id: 'p6', name: 'Prajwal K S', score: [6, 8, 11, 11, 11, 7, 9], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/prajwal.png' }, // SF1 winner
    date: '2025-06-18',
    time: '19:00',
    winner: 'p1',
  },
  
  // Third Place
  {
    id: 'k8',
    round: 'third_place',
    position: 1,
    player1: { id: 'p10', name: 'Murugan', score: [], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/murugan.png' }, // SF1 loser
    player2: { id: 'p2', name: 'Shikar S', score: [], avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/shikar.png' }, // SF2 loser
    date: '2025-06-18',
    time: '16:30',
  },
];