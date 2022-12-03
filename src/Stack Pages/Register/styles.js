import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    background: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#DCDCDC'
   },
    containerLogo:{
     flex: 1,
     justifyContent: 'center',
     marginTop: 100,   
   },
    container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     width: '90%',
   },
    Input: {
     backgroundColor: '#FFF',
     width: 300,
     marginBottom:15,
     color: '#222',
     fontSize: 17,
     borderRadius: 7,
     padding: 10, 
     textAlign: 'center',
   },
    btnSubmit:{
     backgroundColor: '#35AAFF',
     width: 150,
     height: 45,
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius: 7
    },
    submitText:{
      color: '#FFF',
      fontSize: 18
    },
    btnCreate: {
      marginTop: 15,
    }, 
    createText:{
      color: 'black',
      fontSize: 10
    }
})

export default styles