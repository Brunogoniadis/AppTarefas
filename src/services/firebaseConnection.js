import firebase from  'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCnrngCo6Y1YU4Y6l5hxwiMjMrjErxnuD4",
    authDomain: "tarefas-cf80d.firebaseapp.com",
    projectId: "tarefas-cf80d",
    storageBucket: "tarefas-cf80d.appspot.com",
    messagingSenderId: "119857525942",
    appId: "1:119857525942:web:13b671c8b5ac3c57b12217"
  };

 
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
   

export default firebase;