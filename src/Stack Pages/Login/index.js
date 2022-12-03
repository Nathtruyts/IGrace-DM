import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import { MaterialCommunityIcons} from "react-native-vector-icons"
import firebase from '../../config/firebase';
import { useNavigation } from "@react-navigation/native"; 
import styles from './styles';

export default function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorlogin, setErrorLogin] = useState('');

  const navigation = useNavigation();

  const LoginFirebase = ()=>{
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    let user = userCredential.user;
    console.log(user)
    navigation.navigate("Main", { idUser: user.uid })
  })
  .catch((error) => {
    setErrorLogin(true)
    let errorCode = error.code;
    let errorMessage = error.message;
  });
  }

  useEffect(()=>{

  }, []);

    return(
        <KeyboardAvoidingView style={styles.background}>
           
          <View style={styles.container}>
            <TextInput
            style={styles.Input}
            placeholder="Email"
            autoCorrect={false}
            onChangeText={(text)=> setEmail(text)}
            value={email}
            />
            <TextInput
            style={styles.Input}
            secureTextEntry={true}
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={(text)=> setPassword(text)}
            value={password}
            />

            {errorlogin === true 
            ?
            <View style={styles.contentAlert}>
              <MaterialCommunityIcons
              name="alert-circle"
              size={24}
              color="#bdbdbd"
              />
              <Text style={styles.warningAlert}> Email ou senha inválidos! </Text> 
            </View>
            :
            <View/>  
            }
             { email ==="" || password === ""
             ?
             <TouchableOpacity
             disabled={true}
             style={styles.btnSubmit}>
             <Text style={styles.submitText}>Acessar</Text>
          
            </TouchableOpacity>
             :
            <TouchableOpacity 
            style={styles.btnSubmit}
            onPress={() =>  navigation.navigate("Main")}>
            <Text style={styles.submitText}>Acessar</Text>
          
            </TouchableOpacity>
             }

            <TouchableOpacity style={styles.btnCreate}
            onPress = { () =>  navigation.navigate("Register")}>
            <Text style={styles.createText}>Criar conta gratuita</Text>  
            </TouchableOpacity>
                       
           </View>
        
        </KeyboardAvoidingView>
    );


};

