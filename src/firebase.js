import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBE8d2HFYSiH_DzhkO_jjUDdJ81yyxkObA",
    authDomain: "linkedin-chat-clone.firebaseapp.com",
    projectId: "linkedin-chat-clone",
    storageBucket: "linkedin-chat-clone.appspot.com",
    messagingSenderId: "572828017379",
    appId: "1:572828017379:web:fa1546a4bb8f397be85bd6",
    measurementId: "G-9YL92YEHMG"
})
const db = firebaseApp.firestore();

export default db;
