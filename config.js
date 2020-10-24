import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB6b35TvKw7EZVyJ1N24uX3152gNdtA-KM",
    authDomain: "story-hub-463c0.firebaseapp.com",
    databaseURL: "https://story-hub-463c0.firebaseio.com",
    projectId: "story-hub-463c0",
    storageBucket: "story-hub-463c0.appspot.com",
    messagingSenderId: "619575410534",
    appId: "1:619575410534:web:5aad7dd7e00c39335a52a7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();