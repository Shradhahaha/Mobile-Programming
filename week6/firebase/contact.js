// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getDatabase, ref, push, set, get, child } 
from "https://www.gstatic.com/firebasejs/12.12.0/firebase-database.js";

// Your config
const firebaseConfig = {
  apiKey: "AIzaSyBbJsUUrXWgbizflKkfWeSgrs8GeRxjxgk",
  authDomain: "mobile-programming-ed154.firebaseapp.com",
  databaseURL: "https://mobile-programming-ed154-default-rtdb.firebaseio.com",
  projectId: "mobile-programming-ed154",
  storageBucket: "mobile-programming-ed154.firebasestorage.app",
  messagingSenderId: "524985634079",
  appId: "1:524985634079:web:c05d9f67d13567448ef42a"
};

// Init
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


// ================= SUBMIT CONTACT =================
function submitContact() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Basic validation
  if (!name || !email || !message) {
    alert("All fields are required!");
    return;
  }

  // Create unique entry using push()
  const newRef = push(ref(db, "contacts"));

  set(newRef, {
    name: name,
    email: email,
    message: message,
    timestamp: Date.now()
  })
  .then(() => {
    alert("Message sent successfully!");

    // Clear form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  })
  .catch(err => console.error("Error:", err));
}

window.submitContact = submitContact;


// ================= READ MESSAGES =================
function getMessages() {
  const dbRef = ref(db);

  get(child(dbRef, "contacts"))
    .then((snapshot) => {
      const list = document.getElementById("messageList");
      list.innerHTML = "";

      if (snapshot.exists()) {
        const data = snapshot.val();

        Object.keys(data).forEach((key) => {
          const msg = data[key];

          const li = document.createElement("li");
          li.textContent = `${msg.name} (${msg.email}): ${msg.message}`;
          list.appendChild(li);
        });
      } else {
        alert("No messages found");
      }
    })
    .catch(err => console.error(err));
}

window.getMessages = getMessages;