// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOrx3nvT_ALXZueC_mJW0vRsMb9GDe7SY",
  authDomain: "my-app-c6896.firebaseapp.com",
  projectId: "my-app-c6896",
  storageBucket: "my-app-c6896.appspot.com",
  messagingSenderId: "220892678743",
  appId: "1:220892678743:web:c5e0a5529982d6ea197112"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)