import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { getStorage,  } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAx25FDYjFjZik-T0GwS6Qwm5bAIFqp4sk",
  authDomain: "finalproject-4ba04.firebaseapp.com",
  projectId: "finalproject-4ba04",
  storageBucket: "finalproject-4ba04.appspot.com",
  messagingSenderId: "791009427486",
  appId: "1:791009427486:web:16713af28276e3c290ee0f"
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const db = getFirestore(app);