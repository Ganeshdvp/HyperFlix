// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQVpdHoIXAa_9lhRJHx_s8-JdzlluIC-0",
  authDomain: "hyperflix-d20ac.firebaseapp.com",
  projectId: "hyperflix-d20ac",
  storageBucket: "hyperflix-d20ac.firebasestorage.app",
  messagingSenderId: "1096491798840",
  appId: "1:1096491798840:web:7bdc5b54a43e96181bb1cd",
  measurementId: "G-HLX43LSZ9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();