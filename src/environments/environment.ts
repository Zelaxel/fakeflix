// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const environment = {
    firebase: {
        apiKey: "AIzaSyBroHGVnHKlUtIGT35uAPvt-EZ89SNrQjk",
        authDomain: "fakeflix-v2.firebaseapp.com",
        projectId: "fakeflix-v2",
        storageBucket: "fakeflix-v2.firebasestorage.app",
        messagingSenderId: "173029134136",
        appId: "1:173029134136:web:e9ebeb71aadedcd4df7bcd"
    }
};

// Initialize Firebase
const app = initializeApp(environment.firebase);