import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyCyn88LYH0-hsnZGYdR4qCGhmZm15aeneM",
    authDomain: "react-firebase-44039.firebaseapp.com",
    databaseURL: "https://react-firebase-44039.firebaseio.com",
    projectId: "react-firebase-44039",
    storageBucket: "react-firebase-44039.appspot.com",
    messagingSenderId: "34921431831",
    appId: "1:34921431831:web:574d991d2c437e0f1ded52"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;