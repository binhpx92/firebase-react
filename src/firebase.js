// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3PhBkaIKSnVFkxA4P056cp_FafJ6UUgM",
  authDomain: "realtor-clone-react-c7128.firebaseapp.com",
  projectId: "realtor-clone-react-c7128",
  storageBucket: "realtor-clone-react-c7128.appspot.com",
  messagingSenderId: "310288284143",
  appId: "1:310288284143:web:f73c86ad875fe3db641e1a",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
