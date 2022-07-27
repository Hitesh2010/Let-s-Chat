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



} });  }); }
getData();
