
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
    user_name = localStorage.getItem("user_name");
    function addRoom() {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({purpose : "Adding room name"});
localStorage.setItem("room_name",room_name);
window.location = "chatBird.html";
}
    
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

console.log("Room name - "+ Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)>#"+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "chatbird.html";
}
