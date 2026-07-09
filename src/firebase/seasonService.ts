import { doc, getDoc } from 'firebase/firestore';
import { db } from './config';
import type { AppConfig, SeasonData } from '../types';

/**
 * Reads config/app, which points at the latest season and lists all seasons
 * (for the season-picker dropdown in the header).
 */
export async function getAppConfig(): Promise<AppConfig> {
  const snap = await getDoc(doc(db, 'config', 'app'));
  if (!snap.exists()) {
    throw new Error(
      'config/app not found in Firestore. Did you run the migration script? (npm run migrate)'
    );
  }
  return snap.data() as AppConfig;
}

/**
 * Reads a single season document: seasons/{seasonId}.
 * Each season document embeds its groups, matches, and highlights directly,
 * so this is a single read per season.
 */
export async function getSeasonData(seasonId: string): Promise<SeasonData> {
  const snap = await getDoc(doc(db, 'tt-seasons', seasonId));
  if (!snap.exists()) {
    throw new Error(`Season "${seasonId}" not found in Firestore.`);
  }

  return snap.data() as SeasonData;
}
