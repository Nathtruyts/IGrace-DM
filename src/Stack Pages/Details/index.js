import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity}  from "react-native";
 
import firebase from "../../config/firebase";
import styles from "./styles";

export default function Details({navigation, route}){
    const Database = firebase.firestore()
    const [descricaoEdit, setdescricaoEdit] = useState(route.params.descricao)
    const [pessoaEdit, setpessoaEdit]= useState(route.params.pessoa)
    const idTask = route.params.id
   
    function editTask(descricao, pessoa, id){
      Database.collection("devotions").doc(id).update({
        descricao: descricao,
        pessoa: pessoa,
      })
      navigation.navigate("Orações")
    }

    return(
        <View style={styles.container}>
          <Text style={styles.label}>Descrição</Text>
          <TextInput
          style={styles.input}
          placeholder="Ex: Precisa de um emprego"
          onChangeText={setdescricaoEdit}
          value={descricaoEdit}
          />
          <Text style={styles.label}>Quem precisa da oração</Text>
          <TextInput
          style={styles.input}
          placeholder="Ex; Jorge da Silva"
          onChangeText={setpessoaEdit}
          value={pessoaEdit}
          />
          <TouchableOpacity 
            style={styles.buttonNewTask}
            onPress={()=>{
              editTask(descricaoEdit, pessoaEdit, idTask)
            }}
          >
            <Text style={styles.iconButton}>Save</Text>
          </TouchableOpacity>
        </View>
      )
    }