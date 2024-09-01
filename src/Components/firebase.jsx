// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUqAUw37oOshnboOCvQPtahmkzuTzItKU",
  authDomain: "react-authentication-59312.firebaseapp.com",
  projectId: "react-authentication-59312",
  storageBucket: "react-authentication-59312.appspot.com",
  messagingSenderId: "343658549598",
  appId: "1:343658549598:web:fe190dd4458bfbd26f3fcf",
  measurementId: "G-4C1GV6FH98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };