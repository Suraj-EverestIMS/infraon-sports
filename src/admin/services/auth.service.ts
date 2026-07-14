import {
  signInWithPopup,
  signInWithRedirect,
  signOut,
  getRedirectResult,
} from "firebase/auth";

import { auth, googleProvider } from "../../firebase/auth";

const ALLOWED_EMAILS = [
  "surajniyogi1494@gmail.com",
];

export async function login() {
  const isMobile =
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    await signInWithRedirect(auth, googleProvider);
    return null;
  }

  const result = await signInWithPopup(auth, googleProvider);

  const email = result.user.email ?? "";

  if (!ALLOWED_EMAILS.includes(email)) {
    await signOut(auth);
    throw new Error("You are not authorized.");
  }

  return result.user;
}

export async function handleRedirectLogin() {
  const result = await getRedirectResult(auth);

  if (!result) return null;

  const email = result.user.email ?? "";

  if (!ALLOWED_EMAILS.includes(email)) {
    await signOut(auth);
    throw new Error("You are not authorized.");
  }

  return result.user;
}

export async function logout() {
  await signOut(auth);
}