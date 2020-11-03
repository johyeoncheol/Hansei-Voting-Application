// export const firebaseConfig = {
//   apiKey: "AIzaSyBu7ah0d2lvmCFiFOdN2kZnGhWQtU-CjhA",
//   authDomain: "hansei-voting.firebaseapp.com",
//   databaseURL: "https://hansei-voting.firebaseio.com",
//   projectId: "hansei-voting",
//   storageBucket: "hansei-voting.appspot.com",
//   messagingSenderId: "665839898867",
//   appId: "1:665839898867:web:11dee28f96486255972786",
//   measurementId: "G-TBBZGGC216"
// };

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBu7ah0d2lvmCFiFOdN2kZnGhWQtU-CjhA",
  authDomain: "hansei-voting.firebaseapp.com",
  databaseURL: "https://hansei-voting.firebaseio.com",
  projectId: "hansei-voting",
  storageBucket: "hansei-voting.appspot.com",
  messagingSenderId: "665839898867",
  appId: "1:665839898867:web:11dee28f96486255972786",
  measurementId: "G-TBBZGGC216"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);