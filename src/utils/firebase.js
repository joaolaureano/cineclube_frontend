import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBDrEmCsDdZv7-lYsZYBZ5U09XduuEtxTE",
    authDomain: "cineclube-1d284.firebaseapp.com",
    projectId: "cineclube-1d284",
    storageBucket: "cineclube-1d284.appspot.com",
    messagingSenderId: "446980044439",
    appId: "1:446980044439:web:f18eda1d6f569bdedb9bd2"
  };

  firebase.initializeApp(firebaseConfig);

  export const firebaseAuth = firebase.auth;
