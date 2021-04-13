import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseApp = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // storageBucket: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // appId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_APP_ID,

  apiKey: "AIzaSyDzIjHQGn3oSScZk0TvAE8k0YrCa3mRJjk",
  authDomain: "yourphoto-app.firebaseapp.com",
  projectId: "yourphoto-app",
  storageBucket: "yourphoto-app.appspot.com",
  messagingSenderId: "273260124214",
  appId: "1:273260124214:web:29b4e9b15c6768634ca097",
  measurementId: "G-WZ9E58VTM5",
});

export const db = firebase.firestore();
export const storageRef = firebase.storage().ref();
export const auth = firebaseApp.auth();
export default firebaseApp;
