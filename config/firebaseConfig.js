import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBPwz6R6dE6NPHQCEE6zIUc_m9G8OW3_L4",
  authDomain: "solar-stat-8373e.firebaseapp.com",
  projectId: "solar-stat-8373e",
  storageBucket: "solar-stat-8373e.appspot.com",
  messagingSenderId: "896013150693",
  appId: "1:896013150693:web:7760bf40fe751e66fea70c"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export default firebase