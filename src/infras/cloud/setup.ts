import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtCla3HjTbrtUXaT09NWCnBA4Wiuag0Ug",
  authDomain: "eureka-dev-a0773.firebaseapp.com",
  projectId: "eureka-dev-a0773",
  storageBucket: "eureka-dev-a0773.appspot.com",
  messagingSenderId: "251766484207",
  appId: "1:251766484207:web:6c0d95327bfb7a938a7f1a",
  measurementId: "G-8990BK9SYF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const cloud = { db, app };
