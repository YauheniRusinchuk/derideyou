import * as firebase from 'firebase';

const config = {
  apiKey: "",
  authDomain: "youdomain",
  databaseURL: "youurl",
  projectId: "youid",
  storageBucket: "",
  messagingSenderId: ""
};
const fire =  firebase.initializeApp(config);

export default fire;
