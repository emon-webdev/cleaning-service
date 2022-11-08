// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  // measurementId: process.env.REACT_APP_measurementId,


  apiKey: "AIzaSyDTzTtrlMZRaQeJaaYGUe5YsZFplbEfUwA",
  authDomain: "cleaning-service-9d61e.firebaseapp.com",
  projectId: "cleaning-service-9d61e",
  storageBucket: "cleaning-service-9d61e.appspot.com",
  messagingSenderId: "10323670378",
  appId: "1:10323670378:web:997c581317498d2a38a113",
  measurementId: "G-J6KVC6G0BG"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };

