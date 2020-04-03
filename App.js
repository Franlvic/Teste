import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import Constants from 'expo-constants';



export default function App() {
 function mudar(){
	color='red'
 }
  return (
    <SafeAreaView style={styles.container}>
      <View>
       
      
        <View style={styles.fixToText}>
          <Button 
            color='blue'
            title="Teste"
            onPress={mudar}
          />
          
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center', 
  },
  
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  
 
});