// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcrc8p9rV4daWQfdy_oerxpG4T-ljjzls",
  authDomain: "athentication-e4f4a.firebaseapp.com",
  projectId: "athentication-e4f4a",
  storageBucket: "athentication-e4f4a.appspot.com",
  messagingSenderId: "286914875503",
  appId: "1:286914875503:web:487b9161276ce99b25fd9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export {auth}