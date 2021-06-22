//YOUR FIREBASE LINKS
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
    function send() {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
