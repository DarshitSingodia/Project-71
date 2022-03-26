import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAuiH2Mke2FWnTbbFKkCZ64lBearizxt4I",
    authDomain: "e-ride-79a84.firebaseapp.com",
    projectId: "e-ride-79a84",
    storageBucket: "e-ride-79a84.appspot.com",
    messagingSenderId: "819757964438",
    appId: "1:819757964438:web:ae86e0e0b9532331c376b7"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
