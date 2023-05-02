import { firebase, database, ref, set, get } from './firebase.js';

window.addEventListener("DOMContentLoaded", (event) => {
    var writeButton = document.getElementById("write");
    var readButton = document.getElementById("read");
    var dataDiv = document.getElementById("data");
    if (writeButton) {
        writeButton.addEventListener('click', Write);
    }
    if (readButton) {
        readButton.addEventListener('click', Read);
    }
    function Write() {
        const dbRef = ref(database, 'users/' + id);
        const newData = { name: "test" + id };
        set(dbRef, newData);
        id++;
    }
    async function Read() {
        const dbRef = ref(database, 'users');
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            var data = snapshot.val();
            dataDiv.innerHTML = JSON.stringify(data); 
        } else {
            dataDiv.innerHTML = "No data available";
        }
    }
});

var id = 0;
