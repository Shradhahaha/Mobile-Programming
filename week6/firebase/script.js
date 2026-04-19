// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getDatabase, set, get, ref, update, remove } 
from "https://www.gstatic.com/firebasejs/12.12.0/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBbJsUUrXWgbizflKkfWeSgrs8GeRxjxgk",
  authDomain: "mobile-programming-ed154.firebaseapp.com",
  databaseURL: "https://mobile-programming-ed154-default-rtdb.firebaseio.com",
  projectId: "mobile-programming-ed154",
  storageBucket: "mobile-programming-ed154.firebasestorage.app",
  messagingSenderId: "524985634079",
  appId: "1:524985634079:web:c05d9f67d13567448ef42a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log("Connected to DB");


// ================= DELETE =================
function deleteUserData(userId) {
  if (!userId) {
    alert("Please enter User ID");
    return;
  }

  const userRef = ref(db, 'users/' + userId);

  remove(userRef)
    .then(() => {
      console.log("User deleted:", userId);
      alert("User deleted successfully");
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
    });
}

// Make function accessible in HTML
window.deleteUserData = deleteUserData;