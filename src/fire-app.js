import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

import firebaseConfig from "./firebase-config";

const fireApp = firebase.initializeApp(firebaseConfig);
// fireApp
//     .firestore()
//     .enablePersistence()
//     .catch((err) => {
//         if (err.code === "failed-precondition") {
//             console.log(err);
//         } else console.log(err);
//     });

export default fireApp;
