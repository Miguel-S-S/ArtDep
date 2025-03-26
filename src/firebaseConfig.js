// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8vtS6BJ0wJH4eRyZf6QSJHRmPZ3xw-oU",
  authDomain: "test-fcd12.firebaseapp.com",
  projectId: "test-fcd12",
  storageBucket: "test-fcd12.firebasestorage.app",
  messagingSenderId: "8233258304",
  appId: "1:8233258304:web:3e88ffc096100cee45fea5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};