// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDkiPIw6N_sw6ohMpAVkGnfQBU2tNCj4z4",
    authDomain: "project-100-f7eee.firebaseapp.com",
    databaseURL: "https://project-100-f7eee-default-rtdb.firebaseio.com",
    projectId: "project-100-f7eee",
    storageBucket: "project-100-f7eee.appspot.com",
    messagingSenderId: "570198304831",
    appId: "1:570198304831:web:c2ba58bbb70979b5a7308a"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "chat_page.html";
}