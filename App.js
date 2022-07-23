import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import Login from './src/components/Login';

export default function App() {
  const [user, setUser] = useState();
  
  
  if(!user){
    return <Login/>
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text>
        DENTRO DA TELA TAREFAS
      </Text>
    </SafeAreaView >
  );
}



const styles = StyleSheet.create({
  container:{
    flex:1, paddingTop:25, paddingHorizontal:10, backgroundColor: '#D6EAF8'
  },
})