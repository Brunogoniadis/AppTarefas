import React, { useState } from 'react';
import { 
   View,
   Text, 
   StyleSheet, 
   SafeAreaView, 
   TextInput, 
   TouchableOpacity, 
   FlatList 
  } from 'react-native';

import Login from './src/components/Login';
import TaskList from './src/components/Tasklist';

let tasks = [
  {key: '1', nome: 'Estudadar React 3hrs por dia'},
  {key: '2', nome: 'Estudar para faculdade 2hrs por dia'}
]

export default function App() {
  const [user, setUser] = useState(null);

  const [newTask, setNewTask] = useState('');

 if(!user){
  return <Login changeStatus={ (user) => setUser(user) }/>
 }

 return (
   <SafeAreaView style={styles.container}>
    
    <View style={styles.containerTask}>
      <TextInput
        style={styles.input}
        placeholder='O que vai fazer hoje?'
        value={newTask}
        onChangeText={(text) => setNewTask(text)}
      />
      <TouchableOpacity style={styles.buttonAdd}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>

    <FlatList
      data={tasks}
      keyExtractor={(item) => item.key}
      renderItem={({item})=>(
        <TaskList data={item}/>
      )}
    />

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: '#F2f6fc'
  },
  containerTask:{
    flexDirection: 'row'
  },
  input:
  {
    flex: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#141414',
    height: 45
  },
  buttonAdd:{
    backgroundColor: '#141414',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    paddingHorizontal:18,
    borderRadius: 4
  },
  text:
  {
    color: 'white',
    fontSize: 25,
    alignItems: 'center'
  }
})