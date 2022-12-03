import firebase from "firebase"
import 'firebase/storage';
import 'firebase/auth';


var firebaseConfig = {

    apiKey: "AIzaSyB4kYiJYJeu2RFsY3pC7zKHmvVqPCkVZNs",
  
    authDomain: "igrace-authentication.firebaseapp.com",
  
    projectId: "igrace-authentication",
  
    storageBucket: "igrace-authentication.appspot.com",
  
    messagingSenderId: "1044044128148",
  
    appId: "1:1044044128148:web:68c1a40301c48c39ab3981"
  
  };


  firebase.initializeApp(firebaseConfig);
  var provider = new firebase.auth.GoogleAuthProvider();


  export default firebase