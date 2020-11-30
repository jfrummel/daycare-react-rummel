import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBRuLmxLWtbCB4SL_Vg6RfmzfIKNpuDRF4",
    authDomain: "rummel-daycare.firebaseapp.com",
    databaseURL: "https://rummel-daycare.firebaseio.com",
    projectId: "rummel-daycare",
    storageBucket: "rummel-daycare.appspot.com",
    messagingSenderId: "525694888468",
    appId: "1:525694888468:web:c4cd3fdf16c4ef77aa9501",
    measurementId: "G-6TPEBDZTG0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();


const database = firebase.database();

export { firebase, database as default };