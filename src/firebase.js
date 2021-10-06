import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAY1wS6dohM31y54T7PWGvOZbJT_6o60e0",
    authDomain: "mulcam-army.firebaseapp.com",
    databaseURL: "https://mulcam-army-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mulcam-army",
    storageBucket: "mulcam-army.appspot.com",
    messagingSenderId: "18654995637",
    appId: "1:18654995637:web:f5f1189793c2e5de96cafc",
    measurementId: "G-0WYT57CP56"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };