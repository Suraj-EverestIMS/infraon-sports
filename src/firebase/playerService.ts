import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "./config";

export interface PlayerProfile {
  id: string;
  name: string;
  avatar?: string;
}

export async function getPlayers() {
  const snapshot = await getDocs(collection(db, "players"));

  const players: Record<string, PlayerProfile> = {};

  snapshot.forEach((doc) => {
    players[doc.id] = {
      id: doc.id,
      ...(doc.data() as Omit<PlayerProfile, "id">),
    };
  });

  return players;
}