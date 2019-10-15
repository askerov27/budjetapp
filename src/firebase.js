import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCT5bA7sQKdvj1fo9ZOL7pR28cGVOx8wfM",
  authDomain: "budjet-60d84.firebaseapp.com",
  databaseURL: "https://budjet-60d84.firebaseio.com",
  projectId: "budjet-60d84",
  storageBucket: "budjet-60d84.appspot.com",
  messagingSenderId: "912563141558",
  appId: "1:912563141558:web:74d1083e729d5d07cc1f17"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
