// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP2Sgf5SCVebwBYtGIzdT0EQ9cqyG6jDs",
  authDomain: "testapp-38274.firebaseapp.com",
  projectId: "testapp-38274",
  storageBucket: "testapp-38274.appspot.com",
  messagingSenderId: "737264486139",
  appId: "1:737264486139:web:d13e7a95f0ab01e29d925e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage(app, "gs://testapp-38274.appspot.com");