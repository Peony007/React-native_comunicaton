import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBDXn65vRZb1ajwhtDQT9b-_9zAJqnW4E0",
  authDomain: "reactnativefirebase-21aa9.firebaseapp.com",
  projectId: "reactnativefirebase-21aa9",
  storageBucket: "reactnativefirebase-21aa9.appspot.com",
  messagingSenderId: "281964648482",
  appId: "1:281964648482:web:10d690e6459d27ec79127b",
  measurementId: "G-71TQ6MXQL3"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;