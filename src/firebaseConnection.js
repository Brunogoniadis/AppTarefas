import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {

  
};
  
  // Initialize Firebase
if(!firebase.apps.length){

    //Abrir minha conexao
    firebase.initializeApp(firebaseConfig);
}

export default firebase;