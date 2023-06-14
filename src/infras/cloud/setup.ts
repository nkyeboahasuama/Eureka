import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGIPVzYdk7s-ktmRlajOhyjhwvmzQ4R_I",
  authDomain: "eureka-61181.firebaseapp.com",
  projectId: "eureka-61181",
  storageBucket: "eureka-61181.appspot.com",
  messagingSenderId: "1055845408056",
  appId: "1:1055845408056:web:9eb55270c73ab2b26ab5cd",
  measurementId: "G-RXBEZSC5LN",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const cloud = { db, app };
