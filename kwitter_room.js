var firebaseConfig = {
apiKey: "AIzaSyADDUBYU4Z0IxrYP6g52hvahgUFfRyy1IQ",
authDomain: "kwitter-e099c.firebaseapp.com",
databaseURL: "https://kwitter-e099c-default-rtdb.firebaseio.com",
projectId: "kwitter-e099c",
storageBucket: "kwitter-e099c.appspot.com",
messagingSenderId: "540632402535",
appId: "1:540632402535:web:9fa8b88d8eb342fd26e2c2"
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";


function addRoom(){
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
console.log("RoomName - " + Room_names);
row = "<div class='room_name' id="+Room_names + " onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

});
});
}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}