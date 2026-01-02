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

// Initialize Firebase only in main window, not in iframes
let app = null;
let analytics = null;

// Check if we're in an iframe to prevent duplicate initialization
if (typeof window !== 'undefined' && window.self === window.top) {
  // We're in the main window, not in an iframe
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
}

export { app, analytics };
