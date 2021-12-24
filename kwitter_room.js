const firebaseConfig = {
  apiKey: "AIzaSyCV9xCVyvjOWMoH8_7p0khN1Q3fW4bluCs",
  authDomain: "project-95-df348.firebaseapp.com",
  databaseURL: "https://project-95-df348-default-rtdb.firebaseio.com",
  projectId: "project-95-df348",
  storageBucket: "project-95-df348.appspot.com",
  messagingSenderId: "45628170158",
  appId: "1:45628170158:web:eefe7f7c76c8f8ab68b23f",
  measurementId: "G-BY0KK6D94M"
};



user_name = localStorage.getItem("user_name");

document.getElementById("user").innerText = "Welcome " + user_name + "!";

  function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Start code
    row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
  //End code
  });});}
  getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function logout()
{
    window.location = "index.html";
}