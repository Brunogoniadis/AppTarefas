import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';

export default function Login() {

  const [type, setType] = useState('login');

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
        style={[styles.handleLogin, {backgroundColor: type ==='login'? '#3ea6f2': '#92ccf7'}]}
        onPress={handleLogin}
    >
        <Text style={styles.loginText}> 
        
        {type=== 'login'? 'Acessar' : 'Cadastrar'}
         </Text>
    </TouchableOpacity>



    <TouchableOpacity onPress={() => setType(type=> type ==='login' ? 'cadastrar': 'login')}>
        <Text style={{textAlign: 'center', color: 'black'}}> 
        
        {type === 'login' ? 'Criar uma conta' : 'Já possuo uma Conta'}

        </Text>
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