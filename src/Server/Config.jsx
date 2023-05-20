import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { getStorage,  } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDiCZKwDey44KQwlLMCwz-kJ0ULiGRG_GI",
    authDomain: "arproject-54d3c.firebaseapp.com",
    projectId: "arproject-54d3c",
    storageBucket: "arproject-54d3c.appspot.com",
    messagingSenderId: "648351333004",
    appId: "1:648351333004:web:3534d4dcbd4a9980ead9a9",
    measurementId: "G-W7V87SB3RP"
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const db = getFirestore(app);