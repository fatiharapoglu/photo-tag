import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD_ECVhwuHMROgUnx1F3Tpi79O-Qnfghfg",
    authDomain: "find-this-js.firebaseapp.com",
    projectId: "find-this-js",
    storageBucket: "find-this-js.appspot.com",
    messagingSenderId: "702622637829",
    appId: "1:702622637829:web:aea01d67c40a666e22616c",
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export { db, firebase };
