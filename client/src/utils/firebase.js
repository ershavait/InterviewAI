import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
authDomain: "interviwiq-ai.firebaseapp.com",
projectId: "interviwiq-ai",
storageBucket: "interviwiq-ai.firebasestorage.app",
messagingSenderId: "334800807602",
appId: "1:334800807602:web:5f94faac43e700860bcbab",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
