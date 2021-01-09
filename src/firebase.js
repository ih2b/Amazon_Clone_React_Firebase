// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBphqVX_ULNX-THCMcbUNXomdM2sEpKI-Y",
    authDomain: "e-clone-46848.firebaseapp.com",
    projectId: "e-clone-46848",
    storageBucket: "e-clone-46848.appspot.com",
    messagingSenderId: "952652688984",
    appId: "1:952652688984:web:be31d7309d0ab709ec642d",
    measurementId: "G-0CSST9BLZE"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth =firebase.auth();
  export {db ,auth};