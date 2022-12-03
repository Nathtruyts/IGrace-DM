import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import firebase from '../../config/firebase';
import styles from './styles';

import {Feather} from 'react-native-vector-icons'

export default function Oracao({ route, navigation }){
const Database = firebase.firestore()  
const [items, setItems] = useState([]);

function editTask(descricao, pessoa, id){
  Database.collection("devotions").doc(id).update({
    descricao: descricao,
    pessoa: pessoa,
  })
  navigation.navigate("Novo")
}

function deleteTask(id) {
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
              Database.collection("devotions").doc(id).delete();
            }
          }
    ],        
    { cancelable: false }
  );
}
 

  useEffect(() => {
    Database.collection("devotions").onSnapshot((query) =>{
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
          <View style={styles.Tasks}>
            <TouchableOpacity
              style={styles.deleteTask}
              onPress={() => {
                deleteTask(item.id)
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
              style={styles.DescriptionTask}
              onPress={()=>
                navigation.navigate("Details",{
                  id: item.id,
                  descricao: item.descricao,
                  pessoa: item.pessoa,
                })
              }              
            >
            {item.pessoa + ' precisa de ' + item.descricao} 
            </Text>  

          </View>
          )
        }}
      />
    </View>
  )
}
    
    
          
        

  