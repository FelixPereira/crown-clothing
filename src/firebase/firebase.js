import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyCODqNP2wJieN84oEuuVQ6tOBbUjvcOz9M",
  authDomain: "crwn-db-49bba.firebaseapp.com",
  projectId: "crwn-db-49bba",
  storageBucket: "crwn-db-49bba.appspot.com",
  messagingSenderId: "522917693844",
  appId: "1:522917693844:web:90ec57aec2b26b720e2781"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();