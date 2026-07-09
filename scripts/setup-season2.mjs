import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serviceAccount = JSON.parse(
  readFileSync(path.join(__dirname, 'service-account.json'), 'utf-8')
);

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const newPlayers = [
  { id: 'p17', name: 'Guhan', avatar: 'https://placehold.net/avatar-5.svg' },
  { id: 'p18', name: 'Sanjeev', avatar: 'https://placehold.net/avatar-5.svg' },
  { id: 'p19', name: 'Siddharth', avatar: 'https://placehold.net/avatar-5.svg' },
  { id: 'p20', name: 'Shweta Shree', avatar: 'https://placehold.net/avatar-5.svg' },
];

const groupDraw = [
  { id: 'group-a', name: 'Group A', playerIds: ['p1', 'p11', 'p17'] },
  { id: 'group-b', name: 'Group B', playerIds: ['p6', 'p18', 'p19'] },
  { id: 'group-c', name: 'Group C', playerIds: ['p10', 'p15', 'p16'] },
  { id: 'group-d', name: 'Group D', playerIds: ['p2', 'p9', 'p20'] },
];

const upcomingMatches = [
  { 
    id: 'pm1', 
    player1: { 
      id: 'p11', 
      name: 'Ranjith Kumar', 
      score: [14, 8, 13], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    player2: { 
      id: 'p17', 
      name: 'Guhan', 
      score: [12, 11, 11], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    date: '2026-07-08', 
    group: 'Group A', 
    winner: 'p11' 
  },
  { 
    id: 'pm2', 
    player1: { 
      id: 'p6', 
      name: 'Prajwal K S', 
      score: [], 
      avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/prajwal.png' 
    }, 
    player2: { 
      id: 'p18', 
      name: 'Sanjeev', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    date: '2026-07-08', 
    group: 'Group B', 
    winner: '' 
  },
  { 
    id: 'pm3', 
    player1: { 
      id: 'p10', 
      name: 'Murugan', 
      score: [], 
      avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/murugan.png' 
    }, 
    player2: { 
      id: 'p15', 
      name: 'Iranna', 
      score: [], 
      avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/iranna.png' 
    }, 
    date: '2026-07-08', 
    group: 'Group C', 
    winner: '' 
  },
  { 
    id: 'pm4', 
    player1: { 
      id: 'p2', 
      name: 'Shikar S', 
      score: [], 
      avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/shikar.png' 
    }, 
    player2: { 
      id: 'p9', 
      name: 'Pavan C', 
      score: [], 
      avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/pavan.png' 
    }, 
    date: '2026-07-08', 
    group: 'Group D', 
    winner: '' 
  },
  { 
    id: 'pm5', 
    player1: { 
      id: 'p1', 
      name: 'Abhirup', 
      score: [], 
      avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' 
    }, 
    player2: { 
      id: 'p17', 
      name: 'Guhan', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    date: '2026-07-09', 
    group: 'Group A', 
    winner: '' 
  },
  { 
    id: 'pm6', 
    player1: { 
      id: 'p6', 
      name: 'Prajwal K S', 
      score: [], 
      avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/prajwal.png' 
    }, 
    player2: { 
      id: 'p19', 
      name: 'Siddharth', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    date: '2026-07-09', 
    group: 'Group B',
    winner: ''
  },
  { 
    id: 'pm7', 
    player1: { 
      id: 'p10', 
      name: 'Murugan', 
      score: [], 
      avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/murugan.png' 
    }, 
    player2: { 
      id: 'p16', 
      name: 'Nagaraju', 
      score: [], 
      avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/nagaraju.png' 
    }, 
    date: '2026-07-09', 
    group: 'Group C', 
    winner: '' 
  },
  { 
    id: 'pm8', 
    player1: { 
      id: 'p2', 
      name: 'Shikar S', 
      score: [], 
      avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/shikar.png' 
    }, 
    player2: { 
      id: 'p20', 
      name: 'Shweta Shree', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    date: '2026-07-09', 
    group: 'Group D', 
    winner: '' 
  },
  { 
    id: 'pm9', 
    player1: { 
      id: 'p11', 
      name: 'Abhirup', 
      score: [], 
      avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/abhirup.png' 
    }, 
    player2: { 
      id: 'p11', 
      name: 'Ranjith Kumar', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    date: '2026-07-10', 
    group: 'Group A', 
    winner: '' 
  },
  { 
    id: 'pm10', 
    player1: { 
      id: 'p18', 
      name: 'Sanjeev', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    player2: { 
      id: 'p19', 
      name: 'Siddharth', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    date: '2026-07-10', 
    group: 'Group B', 
    winner: '' 
  },
  { 
    id: 'pm11', 
    player1: { 
      id: 'p15', 
      name: 'Iranna', 
      score: [], 
      avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/iranna.png' 
    }, 
    player2: { 
      id: 'p16', 
      name: 'Nagaraju', 
      score: [], 
      avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/nagaraju.png' 
    }, 
    date: '2026-07-10', 
    group: 'Group C', 
    winner: '' 
  },
  { 
    id: 'pm12', 
    player1: { 
      id: 'p9', 
      name: 'Pavan C', 
      score: [], 
      avatar: 'https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/players/pavan.png' 
    }, 
    player2: { 
      id: 'p20', 
      name: 'Shweta Shree', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    date: '2026-07-10', 
    group: 'Group D', 
    winner: '' 
  }
];

const knockoutMatches = [
  { 
    id: 'qf1',
    round: "quarterfinal",
    position: 1,
    player1: { 
      id: '', 
      name: 'Winner Group A', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    player2: { 
      id: '', 
      name: 'Runner-up Group D', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    date: '2026-07-13', 
    group: 'Quarter Finals 1', 
    winner: '' 
  },
  { 
    id: 'qf2', 
    round: "quarterfinal",
    position: 2,
    player1: { 
      id: '', 
      name: 'Winner Group B', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    player2: { 
      id: '', 
      name: 'Runner-up Group C', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    date: '2026-07-13', 
    group: 'Quarter Finals 2', 
    winner: '' 
  },
  { 
    id: 'qf3', 
    round: "quarterfinal",
    position: 3,
    player1: { 
      id: '', 
      name: 'Winner Group C', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    player2: { 
      id: '', 
      name: 'Runner-up Group D', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    date: '2026-07-13', 
    group: 'Quarter Finals 3', 
    winner: '' 
  },
  { 
    id: 'qf4', 
    round: "quarterfinal",
    position: 4,
    player1: { 
      id: '', 
      name: 'Winner Group D', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    player2: { 
      id: '', 
      name: 'Runner-up Group A', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    date: '2026-07-13', 
    group: 'Quarter Finals 4', 
    winner: '' 
  },
  { 
    id: 'sf1',
    round: "semifinal",
    position: 1,
    player1: { 
      id: '', 
      name: 'Winner QF1', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    player2: { 
      id: '', 
      name: 'Winner QF2', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    date: '2026-07-14', 
    group: 'Semi Finals 1', 
    winner: '' 
  },
  { 
    id: 'sf2', 
    round: "semifinal",
    position: 2,
    player1: { 
      id: '', 
      name: 'Winner QF3', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    player2: { 
      id: '', 
      name: 'Winner QF4', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    date: '2026-07-14', 
    group: 'Semi Finals 2', 
    winner: '' 
  },
  { 
    id: 'f1',
    round: "final",
    position: 1,
    player1: { 
      id: '', 
      name: 'Winner SF1', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    player2: { 
      id: '', 
      name: 'Winner SF2', 
      score: [], 
      avatar: 'https://placehold.net/avatar-5.svg' 
    }, 
    date: '2026-07-14', 
    group: 'Final', 
    winner: '' 
  }
];

const previousMatches = [
]

async function main() {
  if (newPlayers.length > 0) {
    const batch = db.batch();
    for (const p of newPlayers) {
      batch.set(db.collection('players').doc(p.id), { name: p.name, avatar: p.avatar || '' });
    }
    await batch.commit();
    console.log(`Added ${newPlayers.length} new player(s) to the roster.`);
  }

  const allIds = groupDraw.flatMap((g) => g.playerIds);
  const uniqueIds = [...new Set(allIds)];
  if (uniqueIds.length === 0) {
    console.log('No player IDs set in groupDraw yet - edit the EDIT ME sections and re-run.');
    return;
  }

  const profiles = {};
  for (const id of uniqueIds) {
    const snap = await db.collection('players').doc(id).get();
    if (!snap.exists) {
      throw new Error(`Player "${id}" not found in roster - add them to newPlayers first.`);
    }
    profiles[id] = snap.data();
  }

  const groups = groupDraw.map((g) => ({
    id: g.id,
    name: g.name,
    players: g.playerIds.map((id) => ({
      id,
      name: profiles[id].name,
      avatar: profiles[id].avatar,
      matches: 0,
      wins: 0,
      losses: 0,
      noResults: 0,
      points: 0,
    })),
  }));

  await db.collection('seasons').doc('season-2').set(
    {
      meta: { id: 'season-2', name: 'Season 2 (2026)', year: 2026, order: 2, groupStageSets: 5, knockoutStageSets: 7, finalsSets: 7, playersPerGroup: 3, qualifiersPerGroup: 2 },
      groups,
      upcomingMatches: upcomingMatches,
      previousMatches: [],
      knockoutMatches: knockoutMatches,
      highlights: [],
    },
    { merge: false }
  );

  console.log('season-2 groups written. Add matches as they get played by editing this script (or directly in the Firestore console) and re-running, or by building a small admin form later.');
}

main().catch((err) => {
  console.error('Setup failed:', err);
  process.exit(1);
});