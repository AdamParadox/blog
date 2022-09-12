import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAUhPRuXCA9jYhGhA5RvjnHBYRHK7wHuT8",
  authDomain: "blogadamp.firebaseapp.com",
  projectId: "blogadamp",
  storageBucket: "blogadamp.appspot.com",
  messagingSenderId: "1030048985720",
  appId: "1:1030048985720:web:ef8a82c31751ec0e30f38d"
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);

export default fireBaseApp.firestore();