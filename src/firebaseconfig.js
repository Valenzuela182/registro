import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAGyP5t0QckBo_RHtrrgqIH6PfuVbgxH-I",
    authDomain: "registro-ee1a9.firebaseapp.com",
    projectId: "registro-ee1a9",
    storageBucket: "registro-ee1a9.appspot.com",
    messagingSenderId: "1069909904709",
    appId: "1:1069909904709:web:de211878c59e8f8949422c",
    measurementId: "G-BNK8GQE1PG"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
//const firebase.analytics();

const auth = fire.auth();

export { auth };