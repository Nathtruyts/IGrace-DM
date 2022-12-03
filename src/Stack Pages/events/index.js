import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity}  from "react-native";
 
import firebase from "../../config/firebase";
import styles from "./styles";

export default function EventsDetails({navigation, route}){
    const Database = firebase.firestore()
    const [eventoEdit, setEventoEdit] = useState(route.params.evento);
    const [localEdit, setLocalEdit] = useState(route.params.local);
    const [dataEdit, setDataEdit] = useState(null);
    const [responsavelEdit, setResponsavelEdit] = useState(null);
    const idEvent = route.params.id
   
    function editEvent(descricao, pessoa, id){
      Database.collection("events").doc(id).update({
        evento: evento,
        local: local,
        data: data,
        responsavel: responsavel,
      })
      navigation.navigate("Programação")
    }

    return(
        <View style={styles.container}>
          <Text style={styles.label}> Nome do evento</Text>
          <TextInput
          style={styles.input}
          placeholder="Ex: corrida por Jesus"
          onChangeText={setEventoEdit}
          value={eventoEdit}
          />
          <Text style={styles.label}>Onde acontecerá o evento?</Text>
          <TextInput
          style={styles.input}
          placeholder="Ex; Capela Maria"
          onChangeText={setLocalEdit}
          value={localEdit}
          />
          <Text style={styles.label}>Quando irá acontecer o evento</Text>
          <TextInput
          style={styles.input}
          placeholder="Ex: Sexta Feira"
          onChangeText={setDataEdit}
          value={dataEdit}
          />
          <Text style={styles.label}>Quem está organizando o evento</Text>
          <TextInput
          style={styles.input}
          placeholder="Ex: Carlos Alberto"
          onChangeText={setResponsavelEdit}
          value={responsavelEdit}
          />
          <TouchableOpacity 
            style={styles.buttonNewTask}
            onPress={()=>{
              editEvent(eventoEdit, localEdit, dataEdit, responsavelEdit, idEvent)
            }}
          >
            <Text style={styles.iconButton}>Save</Text>
          </TouchableOpacity>
        </View>
      )
    }