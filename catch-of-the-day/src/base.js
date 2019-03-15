import Rebase from 're-base';
import firebase from 'firebase';

// Create firbase app
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDJE3lVdJ2sHtmyfpCmy9kcyFuwFJ-5R0s',
  authDomain: 'catch-of-the-day-385cb.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-385cb.firebaseio.com'
});

// Create rebase binding
const base = Rebase.createClass(firebaseApp.database);

// Named export
export { firebaseApp };

//Default export
export default base;
