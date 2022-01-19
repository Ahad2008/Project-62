import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC_k7cubr0BdGuIGLMdN4ur0iSRuCQCqLo",
  authDomain: "school-attendance-app-3e96c.firebaseapp.com",
  databaseURL: "https://school-attendance-app-3e96c-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-3e96c",
  storageBucket: "school-attendance-app-3e96c.appspot.com",
  messagingSenderId: "494803237308",
  appId: "1:494803237308:web:05ebb4e900430357c913b9",
  measurementId: "G-TZZC1ZEZR9"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase.database();