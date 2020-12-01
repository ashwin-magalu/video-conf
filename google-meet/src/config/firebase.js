import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwxna-4ZE08WkFCA_5IUqvxTDfkEzgaDI",
  authDomain: "sociogram-world.firebaseapp.com",
  databaseURL: "https://sociogram-world.firebaseio.com",
  projectId: "sociogram-world",
  storageBucket: "sociogram-world.appspot.com",
  messagingSenderId: "598795257178",
  appId: "1:598795257178:web:83ccaace17e2844ee51f63",
  measurementId: "G-RJXWXF90V8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
