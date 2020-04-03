import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity} from 'react-native';
 
export default class vai extends Component {
 
  constructor(){
 
    super();
 
    this.state={
 
      Color_boton:'red'
 
    }
  }
 
  Set_Color=()=>{
 
    this.setState({
 
      Color_boton:'blue'
 
    })
 
  }
 
 render() {
 
   return (
 
      <View style={styles.MainContainer}>
 
        <View style={styles.actions}>


        <TouchableOpacity style={styles.action } 
        onPress={this.Set_Color}
        >
        <Text style={ [ styles.TextStyle, { color: this.state.Color_boton } ] }>Teste</Text>
        </TouchableOpacity>

        </View>
        
       
        
      </View>
         
      
   );
 }
}
 
const styles = StyleSheet.create({
 
  MainContainer :{
      
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
  
  },
 
  TextStyle:{
    color:'#E02041',
    fontSize:30
     
      
 
  },
  actions:{
    flexDirection:'row',
    justifyContent: 'center', 
    alignItems: 'center'

  },
  

  

 
});