import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword]= useState('');


  function handleLogin(){
    alert('TESTE')
  }



  return (
    <SafeAreaView style={styles.container}>
      
    <TextInput
        placeholder="Seu Email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail}
    />

    <TextInput
        placeholder="********"
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword}
    />

    <TouchableOpacity 
        style={styles.handleLogin}
        onPress={handleLogin}
    >
        <Text style={styles.loginText}> Acessar </Text>
    </TouchableOpacity>



    <TouchableOpacity >
        <Text style={{textAlign: 'center', color: 'black'}}> Criar uma conta </Text>
    </TouchableOpacity>

    </SafeAreaView >
  );
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 40,
    backgroundColor:'#D6EAF8',
    paddingHorizontal: 10
  },
  handleLogin:{
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#141414',
    height: 45,
    marginBottom: 10,
    borderRadius:8

  },
  input:{
    marginBottom:10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#141414'
  },
  loginText:{
    color: 'white',
    fontSize:17,
  }
})