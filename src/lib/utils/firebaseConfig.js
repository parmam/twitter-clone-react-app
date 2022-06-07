// initFirebaseAdmin.ts
import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY
const AUTH_DOMAIN = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
const DATABASE_URL = process.env.REACT_APP_FIREBASE_DATABASE_URL
const PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID
const STORAGE_BUCKET = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,  
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
};

function createFirebaseApp(config) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);