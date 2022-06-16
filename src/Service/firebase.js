import firebase from 'firebase/app';

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    apiKey: "AIzaSyCMfc1DGoXPumpYA7iPvkKCC3F6cQ3zYy4",
    authDomain: "fudalotto-9172e.firebaseapp.com",
    databaseURL: "https://fudalotto-9172e.firebaseio.com",
    projectId: "fudalotto-9172e",
    storageBucket: "fudalotto-9172e.appspot.com",
    messagingSenderId: "659786503788",
    appId: "1:659786503788:web:642703bea019964d432a49",
    measurementId: "G-2XQ5HZHBCW"
};

// console.log(process.env.REACT_APP_FIREBASE_API_KEY);
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;

