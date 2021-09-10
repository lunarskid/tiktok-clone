import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBidu4Ob2vAhVheiPpLhTw68H1RvvQ6nQg",
  authDomain: "bloxified01.firebaseapp.com",
  projectId: "bloxified01",
  storageBucket: "bloxified01.appspot.com",
  messagingSenderId: "1006501277867",
  appId: "1:1006501277867:web:be1c5ab46a8cbf156b87ee"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
