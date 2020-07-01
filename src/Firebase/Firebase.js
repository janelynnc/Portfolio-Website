import firebase from 'firebase/app';
import 'firebase/database'
const config = {
    apiKey: "AIzaSyD9822uW7eNzAL6X_uikhC_1tmHcDPh8CY",
    authDomain: "portfolio-535ed.firebaseapp.com",
    databaseURL: "https://portfolio-535ed.firebaseio.com",
    projectId: "portfolio-535ed",
    storageBucket: "portfolio-535ed.appspot.com",
    messagingSenderId: "246517998506",
    appId: "1:246517998506:web:9e002e3c4ef77a7b2d01d3",
    measurementId: "G-E2VC34LEPP"
};
 
class Firebase {
  constructor() {
    this.app = firebase.initializeApp(config);
    this.database = firebase.database(this.app);
  }

  GetAppName = function(){
    return this.app.name;
  }
  GetJSON = async function(resource){
    var ref = this.database.ref(resource);
    var data = await ref.once('value');
    return data.toJSON();
  }

  GetVal = async function(resource){
    var ref = this.database.ref(resource);
    var data = await ref.once('value');
    return data.val();
  }
}
 
export default Firebase;