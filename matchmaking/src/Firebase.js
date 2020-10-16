// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDtzKoUCSYkLs_4aJaCzLNbcrYrWEA-V_Q",
    authDomain: "matchmaking-1e657.firebaseapp.com",
    databaseURL: "https://matchmaking-1e657.firebaseio.com",
    projectId: "matchmaking-1e657",
    storageBucket: "matchmaking-1e657.appspot.com",
    messagingSenderId: "313379737873",
    appId: "1:313379737873:web:08c6514f2acc83271afcb0",
    measurementId: "G-6956S5GQL8"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;