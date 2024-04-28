// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT1_1KO72I8k7WhBPo8HeczlHAa0D70CQ",
  authDomain: "back-end-p4-d550b.firebaseapp.com",
  projectId: "back-end-p4-d550b",
  storageBucket: "back-end-p4-d550b.appspot.com",
  messagingSenderId: "1096327414046",
  appId: "1:1096327414046:web:19b97ea1100c4371f6490f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);