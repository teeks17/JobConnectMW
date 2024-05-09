// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb07IEfH-KXrp8heF66roiLdcRokAQ12s",
  authDomain: "job-connect-mw.firebaseapp.com",
  projectId: "job-connect-mw",
  storageBucket: "job-connect-mw.appspot.com",
  messagingSenderId: "779627175856",
  appId: "1:779627175856:web:cd020b35e026c3c2e20075",
  measurementId: "G-1EDN2EFM2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);