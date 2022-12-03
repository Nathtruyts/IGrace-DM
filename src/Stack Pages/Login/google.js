// import React from 'react';
// import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
// import firebase from '../../config/firebase';
// import { useNavigation } from "@react-navigation/native"; 
// import styles from './styles';

// export default function Glogin() {

// const navigation = useNavigation();    

// const LoginGoogle = () => {
// firebase.auth().signInWithPopup(provider)
//   .then((result) => {
//     /** @type {firebase.auth.OAuthCredential} */
//     var credential = result.credential;

//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     console.log(user)
//     navigation.navigate("Main")

//   }).catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });
// }

// return(
//     <TouchableOpacity
//        style={styles.btnSubmit}
//         onPress ={LoginGoogle}>
//     <Text style={styles.submitText}>Acessar</Text>
          
//     </TouchableOpacity>
// )
// }
