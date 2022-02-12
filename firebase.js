import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

var config = {
  apiKey: "AIzaSyDEriYiHfdPb0TKWlGBkRj66XMh_RkFHu4",
  authDomain: "combo-social.firebaseapp.com",
  databaseURL: "https://combo-social.firebaseio.com",
  projectId: "combo-social",
  storageBucket: "combo-social.appspot.com",
  messagingSenderId: "306137843491"
};

const firebaseApp = initializeApp(config);
const database = getDatabase(firebaseApp);

export default database;
