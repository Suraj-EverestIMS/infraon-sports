import {
  getRedirectResult,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  type User,
} from "firebase/auth";

import { auth, googleProvider } from "../../firebase/auth";

const ALLOWED_EMAILS = [
  "surajniyogi1494@gmail.com".toLowerCase(),
];

async function authorizeGoogle(user: User) {
  const email = user.email?.toLowerCase().trim() ?? "";

  if (!ALLOWED_EMAILS.includes(email)) {
    await signOut(auth);
    throw new Error("You are not authorized to access this application.");
  }

  return user;
}

export async function loginWithGoogle() {
  const isMobile =
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    await signInWithRedirect(auth, googleProvider);
    return null;
  }

  const { user } = await signInWithPopup(auth, googleProvider);

  return authorizeGoogle(user);
}

export async function handleRedirectLogin() {
  const result = await getRedirectResult(auth);

  if (!result) return null;

  return authorizeGoogle(result.user);
}

export async function loginWithEmail(
  email: string,
  password: string
) {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return user;
  } catch (error) {
    const authError = error as { code: string };
    switch (authError.code) {
      case "auth/invalid-credential":
      case "auth/wrong-password":
      case "auth/user-not-found":
        throw new Error("Invalid email or password.");

      case "auth/invalid-email":
        throw new Error("Please enter a valid email address.");

      case "auth/too-many-requests":
        throw new Error(
          "Too many failed login attempts. Please try again later."
        );

      case "auth/network-request-failed":
        throw new Error(
          "Network error. Please check your internet connection."
        );

      default:
        throw new Error("Unable to sign in. Please try again.");
    }
  }
}

export async function logout() {
  await signOut(auth);
}