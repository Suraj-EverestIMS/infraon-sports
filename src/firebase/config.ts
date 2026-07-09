import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// These values come from your Firebase project's web app config
// (Project settings -> General -> Your apps -> SDK setup and configuration).
// They are NOT secret - Firestore access is controlled by security rules,
// not by hiding this config - but we still keep them in .env so you can
// swap projects (e.g. dev vs prod) without touching code.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
