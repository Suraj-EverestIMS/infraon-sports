import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const serviceAccount = JSON.parse(
  readFileSync(path.join(__dirname, 'service-account.json'), 'utf8')
);

const seasonData = JSON.parse(
  readFileSync(path.join(__dirname, 'new-data-s1.json'), 'utf8')
);

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

async function migrate() {
  const seasonId = seasonData.meta.id;

  console.log(`Migrating ${seasonId}...`);

  await db
    .collection('tt-seasons')
    .doc(seasonId)
    .set(seasonData);

  console.log('--------------------------------');
  console.log('✅ Migration completed');
  console.log(`Collection : tt-seasons`);
  console.log(`Document   : ${seasonId}`);
  console.log('--------------------------------');
}

migrate().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});