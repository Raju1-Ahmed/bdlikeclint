// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA3KMytUL9kLF-FzodS4p4TZfYDF4RzZ0o",
    authDomain: "bdlike.firebaseapp.com",
    projectId: "bdlike",
    storageBucket: "bdlike.appspot.com",
    messagingSenderId: "434562158687",
    appId: "1:434562158687:web:ebecaa81ae2ab22ca1cbea",
    measurementId: "G-JXYPGR9X9L"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;