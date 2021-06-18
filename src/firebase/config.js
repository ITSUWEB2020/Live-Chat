import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_1ez3-pyD5iVg0lusCsQaXEfmhZBawpQ",
    authDomain: "live-chat-c2cb9.firebaseapp.com",
    projectId: "live-chat-c2cb9",
    storageBucket: "live-chat-c2cb9.appspot.com",
    messagingSenderId: "447720941718",
    appId: "1:447720941718:web:1c93c761e9a40581753ab7",
    measurementId: "G-BCZQ7ZE463"
  };

  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()

  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {
      projectFirestore,
      projectAuth,
      timestamp,
  }