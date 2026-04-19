// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getDatabase, set, get, ref, update, remove } 
from "https://www.gstatic.com/firebasejs/12.12.0/firebase-database.js";

// Firebase configuration
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

console.log("Firebase connected:", db);


// ================= CREATE =================
function writeUserData(userId, name, email) {
  if (!userId || !name || !email) {
    alert("All fields are required");
    return;
  }

  set(ref(db, 'users/' + userId), {
    name: name,
    email: email
  })
  .then(() => {
    console.log("User added:", userId);
  })
  .catch((error) => {
    console.error("Error adding user:", error);
  });
}

window.writeUserData = writeUserData;


// ================= READ =================
function readUser() {
  const userRef = ref(db, 'users');

  get(userRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log("Users data:");

        snapshot.forEach((childSnapshot) => {
          const data = childSnapshot.val();
          console.log(
            `ID: ${childSnapshot.key}, Name: ${data.name}, Email: ${data.email}`
          );
        });

      } else {
        console.log("No users found");
      }
    })
    .catch((error) => {
      console.error("Error reading data:", error);
    });
}

window.readUser = readUser;


// ================= UPDATE =================
function updateUserData(userId, updatedData) {
  if (!userId) {
    alert("User ID required");
    return;
  }

  update(ref(db, 'users/' + userId), updatedData)
    .then(() => {
      console.log("User updated:", userId);
    })
    .catch((error) => {
      console.error("Error updating user:", error);
    });
}

window.updateUserData = updateUserData;


// ================= DELETE =================
function deleteUserData(userId) {
  if (!userId) {
    alert("User ID required");
    return;
  }

  remove(ref(db, 'users/' + userId))
    .then(() => {
      console.log("User deleted:", userId);
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
    });
}

window.deleteUserData = deleteUserData;