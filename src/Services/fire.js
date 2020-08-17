import firebase from 'firebase';


 const firebaseConfig = {
    apiKey: "AIzaSyDlTt26uj1YjbR6RhWm7-5mzlie-qquRN4",
    authDomain: "home-food-fbcf5.firebaseapp.com",
    databaseURL: "https://home-food-fbcf5.firebaseio.com",
    projectId: "home-food-fbcf5",
    storageBucket: "home-food-fbcf5.appspot.com",
    messagingSenderId: "15128399311",
    appId: "1:15128399311:web:05f728adcf2a08040dd6ba",
    measurementId: "G-HRMG9ZH4F4"
  };
const fire= firebase.initializeApp(firebaseConfig);

export default fire;