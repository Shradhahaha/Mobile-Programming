// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import {getDatabase, set, ref, } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-database.js";

// import {getDatabse, ref, set, get, update, remove} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-database.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYbylDznmdLSsmtrh7y0CrqF0GLUB256A",
  authDomain: "myapp-9ff3d.firebaseapp.com",
  projectId: "myapp-9ff3d",
  storageBucket: "myapp-9ff3d.firebasestorage.app",
  messagingSenderId: "872163859518",
  appId: "1:872163859518:web:bf1bb293115d58658d856f",
  measurementId: "G-1VC9X1FH0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

console.log(database);
// const analytics = getAnalytics(app);

function writeUserData(userId, firstName, lastName) {
  set(ref(database, 'users/' + userId), {
    firstName: firstName,
    lastName: lastName
  });      // this creates users/1
}

writeUserData(1, "John", "Doe");



