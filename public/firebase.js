import * as firebase from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js';
import { getDatabase, ref, set, get } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyB7lZtXHDGYYdu2P-0J3wPafncyjLYjuKo",
    authDomain: "test-58858.firebaseapp.com",
    databaseURL: "https://test-58858-default-rtdb.firebaseio.com",
    projectId: "test-58858",
    storageBucket: "test-58858.appspot.com",
    messagingSenderId: "9070837927",
    appId: "1:9070837927:web:22945f820137ae74825b82",
    measurementId: "G-R1FN5FBH6V"
};

firebase.initializeApp(firebaseConfig);
const database = getDatabase();

export { firebase, database, ref, set, get };
