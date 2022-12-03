import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
        paddingTop: 20
     },
     Tasks:{
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-between",
      marginTop:5
     },
     deleteTask:{
       justifyContent:"center",
       paddingLeft:15,
     },
     DescriptionTask:{
      width:"75%",
      alignContent:"flex-start",
      backgroundColor:"#f5f5f5cf",
      padding:12,
      paddingHorizontal: 20,
      borderRadius:50,
      marginBottom: 5,
      marginRight:15,
      color:"#282b2db5",
     },
     title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20
    },
     iconButton:{
      color:"#ffffff",
      fontSize:25,
      fontWeight:"bold",
     }  
    });

  export default styles