var firebaseConfig = {
    apiKey: "AIzaSyBaq-93sdxJpyaciZGv5haHYFwB3YadHKU",
    authDomain: "lets-chat-web-app-25526.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-25526-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-25526",
    storageBucket: "lets-chat-web-app-25526.appspot.com",
    messagingSenderId: "8263640185",
    appId: "1:8263640185:web:511f0d9562f536524d20a8"
  };

 firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("Username");
 document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

 function addroom() {
        room_name = document.getElementById("room_name").value;

       localStorage.setItem("Roomname",room_name);
   
       window.location = "kwitter_page.html";

       firebase.database().ref("/").child(room_name).update({
             purpose: "Adding Room Name"
       });
 }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("room_name"+Room_names);
 var row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML= row;
 //End code
 });});}
getData();
//project 95 lets chst web app 3//

  