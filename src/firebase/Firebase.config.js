// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1e8NNNFnaINwtyjfmcgRIkbQNeHikBTw",
  authDomain: "portable-learning.firebaseapp.com",
  projectId: "portable-learning",
  storageBucket: "portable-learning.appspot.com",
  messagingSenderId: "987275230718",
  appId: "1:987275230718:web:1e28df8e9c27ab3c3954af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;