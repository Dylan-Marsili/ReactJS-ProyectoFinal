import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCLEiwADRIUD05B4VjWLWngwa6adL1cvTA",
  authDomain: "ultima-entrega.firebaseapp.com",
  projectId: "ultima-entrega",
  storageBucket: "ultima-entrega.appspot.com",
  messagingSenderId: "159034081300",
  appId: "1:159034081300:web:3654dba4b592d7f7f6e701",
  measurementId: "G-2SGK44VGM4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()