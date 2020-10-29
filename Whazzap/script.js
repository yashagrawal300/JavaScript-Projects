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

var channelName = sessionStorage.getItem("channelName");
var userName = sessionStorage.getItem("userName");






var ref = database.ref(channelName + "/");




var gotit = 0;







function send(){
    s = document.getElementById("typemessage");
    var data ={
        Message: s.value,
        UserName: userName

    }

    ref.push(data);


}




ref.on('value', gotdata, errdata);

function gotdata(data) {
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


}

function errdata(data){
    console.log("errdata");
}

