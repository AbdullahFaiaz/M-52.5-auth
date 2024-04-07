// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjW3qpeb_mbPZcOJv9VsveMKgvLprTTUQ",
  authDomain: "m-52-5-auth.firebaseapp.com",
  projectId: "m-52-5-auth",
  storageBucket: "m-52-5-auth.appspot.com",
  messagingSenderId: "301050639360",
  appId: "1:301050639360:web:591274277eec34b700d4e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app