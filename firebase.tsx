import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMWUES0XOmBDUe732jhIXssCskTqJsovo",
  authDomain: "instagram-clone-5ad77.firebaseapp.com",
  projectId: "instagram-clone-5ad77",
  storageBucket: "instagram-clone-5ad77.appspot.com",
  messagingSenderId: "472726274639",
  appId: "1:472726274639:web:c0d460614a296306f0a03a",
  measurementId: "G-V7GS1YE8NQ",
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, analytics, auth, firestore };
