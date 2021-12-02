

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBBhNlueqTK0URbBlbcauQkeIJ2HQvQ97Y",
      authDomain: "kwitter2-2b5f8.firebaseapp.com",
      databaseURL: "https://kwitter2-2b5f8-default-rtdb.firebaseio.com",
      projectId: "kwitter2-2b5f8",
      storageBucket: "kwitter2-2b5f8.appspot.com",
      messagingSenderId: "94128335232",
      appId: "1:94128335232:web:ba71d1d403c1946194f965"
}; // Initialize Firebase 
firebase.initializeApp(firebaseConfig); 

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name- " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child("room_name").update({
      purpose : "adding room name"   
      });

      localStorage.setItem("room_name", room_name);

     window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location= "kwitter_page.html";
}

function logout()  {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "index.html";
}




