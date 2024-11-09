// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhe78CGp6izAl50Cf-A9L5hudCUaiNa9s",
  authDomain: "simple-firebase-projects-ea316.firebaseapp.com",
  projectId: "simple-firebase-projects-ea316",
  storageBucket: "simple-firebase-projects-ea316.firebasestorage.app",
  messagingSenderId: "640017962954",
  appId: "1:640017962954:web:6a526ad9da81f671eba133"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth