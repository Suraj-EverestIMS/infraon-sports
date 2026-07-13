import {
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth, googleProvider } from "../../firebase/auth";

const ALLOWED_EMAILS = [
  "surajniyogi1494@gmail.com",
];

export async function login() {
  const result = await signInWithPopup(auth, googleProvider);

  const email = result.user.email ?? "";

  if (!ALLOWED_EMAILS.includes(email)) {
    await signOut(auth);
    throw new Error("You are not authorized to access this application.");
  }

  return result.user;
}

export async function logout() {
  await signOut(auth);
}