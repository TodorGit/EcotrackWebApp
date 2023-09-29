// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3unUkgpFmBouNRxwCoko2JQOrez3LxDM",
  authDomain: "ecotrack-app.firebaseapp.com",
  projectId: "ecotrack-app",
  storageBucket: "ecotrack-app.appspot.com",
  messagingSenderId: "366656515684",
  appId: "1:366656515684:web:b576eaf085bf7a623c3971"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);