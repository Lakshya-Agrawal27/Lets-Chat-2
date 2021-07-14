var firebaseConfig = {
      apiKey: "AIzaSyBmbHuDn1s8Xt_c_F9ZvuI334RwMYkS8CQ",
      authDomain: "lakshya-ea651.firebaseapp.com",
      databaseURL: "https://lakshya-ea651-default-rtdb.firebaseio.com",
      projectId: "lakshya-ea651",
      storageBucket: "lakshya-ea651.appspot.com",
      messagingSenderId: "741489170897",
      appId: "1:741489170897:web:3577ad7b5a05530f33a8f0",
      measurementId: "G-RKZ28RC94K"
    };
    firebase.initializeApp(firebaseConfig);

    user_name   =   localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML   =   "welcome"   +   user_name   +   "!";

    function addRoom(){
          Room_names = document.getElementById("Room_names").value;
          firebase.database().ref("/").child(Room_names).update({purpose:"adding room name"});
          localStorage.setItem("Room_names",Room_names);
          window.location = "kwitter_room.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name - " + Room_names);
       row = "<div class= 'room_name' id='room_name' onclick = 'redirect_to_room_name(this.id)'>#"+ Room_names +"</div>"
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
 
function redirect_to_room_name(name){
      console.log(name);
      localStorage.setItem("Room_names",name);
      window.location = "kwitter_room.html";
}

function send(){
      message = document.getElementById("message").value;
      firebase.database().ref(Room_names).push({
            name: user_name,
            message :message,
            like: 0
      });
      document.getElementById("message").value = "";
}

function logout(){
      localstorage.removeItem("user_name");
      localstorage.removeItem("Room_names");
      window.location = "index.html";
}