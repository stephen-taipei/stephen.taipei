// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhrcM9_rRItclmwetc_u6nP8Ssnpp0ysM",
  authDomain: "stephen-taipei.firebaseapp.com",
  projectId: "stephen-taipei",
  storageBucket: "stephen-taipei.firebasestorage.app",
  messagingSenderId: "301231511290",
  appId: "1:301231511290:web:a7c2b7d8f08f38b37edb43",
  measurementId: "G-QVYBP1GL7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
