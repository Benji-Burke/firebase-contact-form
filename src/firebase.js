import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAYy5-cpcvr-Nm_JOP8iivaq0ftUlwPv8k",
    authDomain: "react-contact-form-dcdde.firebaseapp.com",
    databaseURL: "https://react-contact-form-dcdde.firebaseio.com",
    projectId: "react-contact-form-dcdde",
    storageBucket: "react-contact-form-dcdde.appspot.com",
    messagingSenderId: "930375936710",
    appId: "1:930375936710:web:ca2c9c8973c387f4d505c7"
})

var db = firebaseApp.firestore();

export { db }; 
