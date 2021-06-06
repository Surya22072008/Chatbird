
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAqyLF2-nCed-dx4wq7rMmGc8vLyYDd-6g",
      authDomain: "chatbird-d4d94.firebaseapp.com",
      databaseURL: "https://chatbird-d4d94-default-rtdb.firebaseio.com",
      projectId: "chatbird-d4d94",
      storageBucket: "chatbird-d4d94.appspot.com",
      messagingSenderId: "244168966120",
      appId: "1:244168966120:web:c00c0e9be49649c405ee5d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
