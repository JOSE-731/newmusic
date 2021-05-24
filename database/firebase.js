import firebase from 'firebase'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDWV9CvqSGBSrnTuA4TNwmqZoIxZVVaj_o",
    authDomain: "newmusic-a4114.firebaseapp.com",
    projectId: "newmusic-a4114",
    storageBucket: "newmusic-a4114.appspot.com",
    messagingSenderId: "460982500570",
    appId: "1:460982500570:web:a77c54d1c4e8570f8779e3",
    measurementId: "G-97SJJQ2ST5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore()

  export default{
      firebase,
      db
  }