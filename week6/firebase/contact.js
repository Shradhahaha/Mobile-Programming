// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getDatabase, ref, set, push, get, child } 
from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNtLs8n1TzTkPA_klYjMDfOz1syWH4YTs",
  authDomain: "fresh-farm-e20d5.firebaseapp.com",
  projectId: "fresh-farm-e20d5",
  storageBucket: "fresh-farm-e20d5.firebasestorage.app",
  messagingSenderId: "517029016504",
  appId: "1:517029016504:web:f0c6a1242abc9f5cef554d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ================= SUBMIT CONTACT =================
function submitContact() {
  const userId = document.getElementById("userId").value.trim();
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const phone = document.getElementById("phone").value.trim();

  // Validation
  if (!userId || !firstName || !lastName || !email || !address || !phone) {
    alert("All fields are required!");
    return;
  }

  // Create new record
  const newRef = push(ref(db, "contacts"));

  set(newRef, {
    userId,
    firstName,
    lastName,
    email,
    address,
    phone,
    timestamp: Date.now()
  })
  .then(() => {
    alert("Data saved successfully!");

    // Clear form
    document.getElementById("contactForm").reset();
  })
  .catch(err => console.error("Error:", err));
}

// Attach submit event
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  submitContact();
});

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
          li.textContent = `${msg.firstName} ${msg.lastName} (${msg.email}) - ${msg.phone}`;
          list.appendChild(li);
        });

      } else {
        alert("No messages found");
      }
    })
    .catch(err => console.error("Error:", err));
}

// Make function global for button
window.getMessages = getMessages;

window.submitContact = submitContact;