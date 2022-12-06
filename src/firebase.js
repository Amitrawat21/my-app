import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAP-Lqkc99YGk5RAZ1pzuQEG3w0Fx5JIVI",
    authDomain: "chatting-app-80bc1.firebaseapp.com",
    projectId: "chatting-app-80bc1",
    storageBucket: "chatting-app-80bc1.appspot.com",
    messagingSenderId: "885663538873",
    appId: "1:885663538873:web:4aa2a9fae8e7792c804568",
    measurementId: "G-EKEM0D8ERZ"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app