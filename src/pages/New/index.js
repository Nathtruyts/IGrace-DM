import React, {useEffect, useState} from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../../config/firebase';

import styles from './styles';
import {Feather} from 'react-native-vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
 
export default function New({ route, navigation }) {
const Database = firebase.firestore()
const [descricao, setDescricao] = useState(null); 
const [pessoa, setPessoa] = useState(null);
const [evento, setEvento] = useState(null);
const [local, setLocal] = useState(null);
const [data, setData] = useState(null);
const [responsavel, setResponsavel] = useState(null);
 
useEffect(() => {
  if(!route.params) return;
  setDescricao();
  setPessoa();
}, [route])

useEffect(() => {
  if(!route.params) return;
  setEvento();
  setLocal();
  setData();
  setResponsavel();
}, [route])


function saveItem(){
  Database.collection('devotions').add({
    descricao: descricao,
    pessoa: pessoa,
  })
  navigation.navigate("Orações");
}

function saveData(){
  Database.collection('events').add({
    evento: evento,
    local: local,
    data: data,
    responsavel: responsavel,
  })
  navigation.navigate("Programação")
}

  return (
<ScrollView>
 <View style={styles.container}>
  <Text style={styles.title}>Novo Pedido de Oração</Text>
  <View style={styles.inputContainer}> 
    <TextInput 
      style={styles.input} 
      onChangeText={setDescricao} 
      placeholder="Qual o pedido?"
      clearButtonMode="always"
      value={descricao} /> 
    <TextInput 
      style={styles.input} 
      onChangeText={setPessoa} 
      placeholder="Para quem é destinada a oração?" 
      clearButtonMode="always"
      value={pessoa} />

     { descricao ==="" || pessoa ===""
     ?
     <TouchableOpacity 
      disabled={true}
      style={styles.button}>
    <View style={styles.buttonContainer}>
        <Feather name="save" size={22} color="white"/>
      </View> 
    </TouchableOpacity>
    :
    <TouchableOpacity 
      style={styles.button} 
      onPress={()=>{
        setPessoa("")
        setDescricao("")
        saveItem()
      }}>
    <View style={styles.buttonContainer}>
        <Feather name="save" size={22} color="white"/>
      </View> 
    </TouchableOpacity>
    }   
  </View>
  <View style={styles.container}>
  <Text style={styles.title}>Novo Pedido de Oração</Text>
  <View style={styles.inputContainer}> 
    <TextInput 
      style={styles.input} 
      onChangeText={setEvento} 
      placeholder="Qual o nome do evento"
      clearButtonMode="always"
      value={evento} /> 
    <TextInput 
      style={styles.input} 
      onChangeText={setLocal} 
      placeholder="Onde será feito o evento?" 
      clearButtonMode="always"
      value={local} />
    <TextInput 
      style={styles.input} 
      onChangeText={setData} 
      placeholder="Quando será o evento?" 
      clearButtonMode="always"
      value={data} />
    <TextInput 
      style={styles.input} 
      onChangeText={setResponsavel} 
      placeholder="Quem é o responsável pelo evento?" 
      clearButtonMode="always"
      value={responsavel} />    

     { evento ==="" || data ==="" || responsavel==""
     ?
     <TouchableOpacity 
      disabled={true}
      style={styles.button}>
    <View style={styles.buttonContainer}>
        <Feather name="save" size={22} color="white"/>
      </View> 
    </TouchableOpacity>
    :
    <TouchableOpacity 
      style={styles.button} 
      onPress={()=>{
        setEvento("")
        setLocal("")
        setData("")
        setResponsavel("")
        saveData()
      }}>
    <View style={styles.buttonContainer}>
        <Feather name="save" size={22} color="white"/>
      </View> 
    </TouchableOpacity>
    }   
  </View>
  </View>
</View>
</ScrollView>
);
  }
