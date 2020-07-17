import firebase from "firebase";

const fireBaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBcMJy3X4dBtqCqjcPdqjbgSK5Hsvv2Tl0",
    authDomain: "ify-fcd63.firebaseapp.com",
    databaseURL: "https://ify-fcd63.firebaseio.com",
    projectId: "ify-fcd63",
    storageBucket: "ify-fcd63.appspot.com",
    messagingSenderId: "190682807604",
    appId: "1:190682807604:web:07c50c81a29eae5ef03961",
    measurementId: "G-EQCT7T0RZ4"
});

const auth = firebase.auth();

export { auth };
