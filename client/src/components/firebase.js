// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVD1kn9K8xbwkngkeGwVGEkm9bS3Spf5k",
  authDomain: "sih2-4ba8c.firebaseapp.com",
  projectId: "sih2-4ba8c",
  storageBucket: "sih2-4ba8c.appspot.com",
  messagingSenderId: "359651756522",
  appId: "1:359651756522:web:1697cd1e4f6445e428ca93",
  measurementId: "G-5RNS15E9CQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;