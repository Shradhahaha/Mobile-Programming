// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, set, ref, get, update, remove  } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
// initializeApp – to initialize your Firebase app.
// getDatabase – to get a reference to the Firebase Realtime Database.
// set – to write data to the database.
// get – to read data from the database.
// ref – to create references (paths) in the database.


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDicfMu3pcz7BC-izW2kMZaiwWxU62rP5U",
    authDomain: "abiralproject-18a16.firebaseapp.com",
    projectId: "abiralproject-18a16",
    storageBucket: "abiralproject-18a16.firebasestorage.app",
    messagingSenderId: "85482426604",
    appId: "1:85482426604:web:b7a287efadee645647d5c9",
    measurementId: "G-DF8V6J4KJ3"
  };

// Initialize Firebase
// initializeApp(firebaseConfig) initializes your Firebase application using the config.
// getDatabase(app) gets the Realtime Database instance connected to your Firebase project.
const app = initializeApp(firebaseConfig);
    const db = getDatabase(app)

console.log(db)




//Function to write user data to Firebase Realtime Database
// function writeUserData(userId, firstname, lastname) {
//     // Get the database instance
//     // const db = getDatabase();
  
//     // Create a reference/points to 'users/{userId}' and set the data (name and email)
 //set(ref(db, 'users/' + userId), {
//       firstname: firstname,      
//       lastname: lastname,
      
//     });
//   }
//writeUserData(2, "Abiral", "Khanal")

// ref(db, 'users') points to the users path.
// get(userRef) gets the data at that path.
// snapshot.forEach(...) loops over each child node (each user).
// childsnapshot.val() gives the actual data (name and email), which is printed.
// function readUser(){
//     const userRef = ref(db,'users')

//     get(userRef).then((snapshot)=>{
//         snapshot.forEach((childsnapshot)=>{
//             console.log(childsnapshot.val());
//         })
//     })
// }
// readUser()


// function updateUserData(userId, updatedData) {
//   const userRef = ref(db, 'users/' + userId);
//   update(userRef, updatedData)
//     .then(() => {
//       console.log("User updated successfully");
//     })
//     .catch((error) => {
//       console.error("Error updating user:", error);
//     });
// }
// // Example usage:
// updateUserData(2, {firstname: "Abi", lastname: "Khanal"});




function deleteUserData(userId) {
  const userRef = ref(db, 'users/' + userId);
  remove(userRef)
    .then(() => {
      console.log("User deleted successfully");
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
    });
}

// // // // // // // Example usage:
deleteUserData(2);

// //console.log("Added! Good")

