import firebase from 'firebase/app';
import 'firebase/firebase';

var config = {
  apiKey: "AIzaSyDEriYiHfdPb0TKWlGBkRj66XMh_RkFHu4",
  authDomain: "combo-social.firebaseapp.com",
  databaseURL: "https://combo-social.firebaseio.com",
  projectId: "combo-social",
  storageBucket: "combo-social.appspot.com",
  messagingSenderId: "306137843491"
};
firebase.initializeApp(config);

const firebaseApp = firebase;

export default firebaseApp;
