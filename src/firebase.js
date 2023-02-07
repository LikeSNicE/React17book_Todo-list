
import {initializeApp} from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4lNRvqOaEG0xLtThDIY3PB7YWO6asIB8",
  authDomain: "todos-d8db0.firebaseapp.com",
  projectId: "todos-d8db0",
  storageBucket: "todos-d8db0.appspot.com",
  messagingSenderId: "583583004327",
  appId: "1:583583004327:web:1fdcf13b307f37cf834d82",
  databaseURL: "https://todos-d8db0-default-rtdb.europe-west1.firebasedatabase.app"

};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;

