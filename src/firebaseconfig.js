import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAP-yTShaYl2J6jIkI4sGVLeB5ujb6OlL0",
    authDomain: "registro-v2.firebaseapp.com",
    projectId: "registro-v2",
    storageBucket: "registro-v2.appspot.com",
    messagingSenderId: "230837729646",
    appId: "1:230837729646:web:0804cc8105b569c9a8297f",
    measurementId: "G-K290S6R5DF"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
//const firebase.analytics();

const auth = fire.auth()
const store = fire.firestore()

export { auth }
export { store }