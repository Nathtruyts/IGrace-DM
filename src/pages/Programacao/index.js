import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import firebase from '../../config/firebase';
import styles from './styles';

import {Feather} from 'react-native-vector-icons'

export default function Oracao({ route, navigation }){
const Database = firebase.firestore()  
const [items, setItems] = useState([]);

function editEvent(evento, local, data, responsavel, id){
  Database.collection("events").doc(id).update({
    evento: evento,
    local: local,
    data: data,
    responsavel: responsavel,
  })
  navigation.navigate("Novo")
}

function deleteEvent(id) {
  Alert.alert(
    "Atenção",
    "Você tem certeza que deseja excluir este item?",
    [
        {
            text: "Não",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
        },
        {
            text: "Sim", onPress: () => {
              Database.collection("events").doc(id).delete();
            }
          }
    ],        
    { cancelable: false }
  );
}
 

  useEffect(() => {
    Database.collection("events").onSnapshot((query) =>{
      const list = [];
      query.forEach((doc)=>{
        list.push({...doc.data(), id: doc.id });
      });
      setItems(list)
    });
  }, []);


  return(
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        renderItem={( { item } )=>{
      return(
          <View style={styles.Events}>
            <TouchableOpacity
              style={styles.deleteEvent}
              onPress={() => {
                deleteEvent(item.id)
              }}
            >
            <Feather
              name="trash"
              size={23}
              color="#F92e6A"
            >
            </Feather>
            </TouchableOpacity>
            <Text
              style={styles.DescriptionEvent}
              onPress={()=>
                navigation.navigate("Events",{
                  id: item.id,
                  evento: item.evento,
                  local: item.local,
                  data: item.data,
                  responsavel: item.responsavel,
                })
              }              
            >
            {item.evento + ' em ' + item.local} 
            </Text>  

          </View>
          )
        }}
      />
    </View>
  )
}
    
    
          
        

  
