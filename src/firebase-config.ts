// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjuHkpTZD09Rj89y3mQ7tLwxUSFzTAMlg",
  authDomain: "todo-253b8.firebaseapp.com",
  projectId: "todo-253b8",
  storageBucket: "todo-253b8.appspot.com",
  messagingSenderId: "1049940911022",
  appId: "1:1049940911022:web:9cf2e0c4a30fa67947de3f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
