import {
  getAuth,
  GoogleAuthProvider,
  signOut
} from "firebase/auth";

import { app } from "./config";

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export async function logout() {
  await signOut(auth);
}