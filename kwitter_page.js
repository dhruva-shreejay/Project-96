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

  firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
      });
      document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

