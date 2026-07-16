import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from './config';
import type { AppConfig, SeasonData } from '../types';

export async function getAppConfig(): Promise<AppConfig> {
  const snap = await getDoc(doc(db, 'config', 'app'));
  if (!snap.exists()) {
    throw new Error(
      'config/app not found in Firestore. Did you run the migration script? (npm run migrate)'
    );
  }
  return snap.data() as AppConfig;
}

export async function getSeasonData(seasonId: string): Promise<SeasonData> {
  const snap = await getDoc(doc(db, 'tt-seasons', seasonId));
  if (!snap.exists()) {
    throw new Error(`Season "${seasonId}" not found in Firestore.`);
  }
  
  // const seasonData = snap.data() as SeasonData;

  // console.log('Season Data:', seasonData);

  return snap.data() as SeasonData;
}

export async function updateSeasonData(
  seasonId: string,
  data: SeasonData
): Promise<void> {
  await updateDoc(doc(db, "tt-seasons", seasonId), {
    groups: data.groups,
    matches: data.matches,
    highlights: data.highlights,
    meta: data.meta,
  });
}