import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAHekDKdsrgwLDzBjNX98Gt2Y89c0-K-0",
  authDomain: "telihouse.firebaseapp.com",
  projectId: "telihouse",
  storageBucket: "telihouse.appspot.com",
  messagingSenderId: "1056833363440",
  appId: "1:1056833363440:web:7db2f3ac847cbdaef3d135",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export default firebaseApp;
export {db, auth}