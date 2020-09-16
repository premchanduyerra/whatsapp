import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBTyKIOL0qXRc_vya24GDgz8ZeE7MYoezY",
    authDomain: "whatsapp-726c2.firebaseapp.com",
    databaseURL: "https://whatsapp-726c2.firebaseio.com",
    projectId: "whatsapp-726c2",
    storageBucket: "whatsapp-726c2.appspot.com",
    messagingSenderId: "760691964145",
    appId: "1:760691964145:web:e1b1a62d2a8a732ecc9150",
    measurementId: "G-SJ2877G6W5"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;