import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBoxjdNd9yMdEI2fPkZAbTjNRtnTqB_krA",
    authDomain: "upbeat-app-1246d.firebaseapp.com",
    projectId: "upbeat-app-1246d",
    storageBucket: "upbeat-app-1246d.appspot.com",
    messagingSenderId: "738548174122",
    appId: "1:738548174122:web:ef389cddba29005c696253",
    measurementId: "G-GTW5E5YNV3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth };

