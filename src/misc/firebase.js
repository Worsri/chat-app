import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyBxd6uMj1y7DfGdDRqtURj3UAy89ufnpNE',
  authDomain: 'chat-web-app-7a6f9.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-7a6f9-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'chat-web-app-7a6f9',
  storageBucket: 'chat-web-app-7a6f9.appspot.com',
  messagingSenderId: '1031180737159',
  appId: '1:1031180737159:web:4158e721736b78d991f622',
};

const app = firebase.initializeApp(config);
