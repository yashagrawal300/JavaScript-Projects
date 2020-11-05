//Targets

//1) Create new username(Unique)
//2) List all the groups(tags in future)
//3) Click on the group and start messaging(start marking a new group)
//4) Group unique id
//5) Enter the group id to join
//6) Delete the group
//7) Create new group


var firebaseConfig = {
    apiKey: "AIzaSyDOWyD_Y2nbygOvIuQDV6tXOTdQSGdoF7o",
    authDomain: "whazzap-2e9b5.firebaseapp.com",
    databaseURL: "https://whazzap-2e9b5.firebaseio.com",
    projectId: "whazzap-2e9b5",
    storageBucket: "whazzap-2e9b5.appspot.com",
    messagingSenderId: "526857764599",
    appId: "1:526857764599:web:02fe5e30ac455387d0ddf2",
    measurementId: "G-VGNR6EDMKH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


database = firebase.database();
var user = sessionStorage.getItem("email");




if (user) {
    // User is signed in.

} else {
    // No user is signed in.
    location.replace("index.html")

}




var ref = database.ref("users/" + user);





var gotit = 0;
var gotusername = 0;




function signout(){
    firebase.auth().signOut().then(function() {
        location.replace( "index.html");
        sessionStorage.setItem("email", null);


    }).catch(function(error) {
        alert(error.message);

        // An error happened.
    });
}



ref.on('value', gotdata, errdata);

function gotdata(data) {
    if(gotusername===0){
        var setUsername = document.getElementById("Username");
        const db = data.val();
        const keys = Object.keys(db);
        var k = keys[1];
        var username = db[k];
        console.log(username);

        setUsername.innerText = "Welcome " + username;




    }


}

function errdata(data){
    console.log("errdata");
}




//use this later

/*

    var titlechannelName = document.getElementById("titlechannelName")

    titlechannelName.innerText = channelName;


    const db = data.val();
    const keys = Object.keys(db);

    j = document.getElementById("messageBox");
    s = document.getElementById("typemessage");

    if(gotit ===0){
        for (let i = 0; i < keys.length; i++) {
            var k = keys[i];
            var mess = db[k].Message;
            var username = db[k].UserName;



            var a = document.createElement("tr");
            var b = document.createElement("td");
            var c = document.createElement("td");



            b.innerText = mess;
            c.innerText = username;

            a.appendChild(b)
            a.appendChild(c);


            j.appendChild(a);
            gotit = 1;
        }


    }
    else{
        var k = keys[keys.length -1];
        var mess = db[k].Message;
        var username = db[k].UserName;



        var a = document.createElement("tr");
        var b = document.createElement("td");
        var c = document.createElement("td");



        b.innerText = mess;
        c.innerText = username;

        a.appendChild(b)
        a.appendChild(c);


        j.appendChild(a);




        s.value = "";


    }


 */
