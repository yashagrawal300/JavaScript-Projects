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
var ref = database.ref("Chat/");


var gotit = 0;



function send(){
    s = document.getElementById("typemessage");
    var data ={
        Message: s.value

    }

    ref.push(data);


}




ref.on('value', gotdata, errdata);

function gotdata(data) {

    const db = data.val();
    const keys = Object.keys(db);

    j = document.getElementById("messageBox");

    if(gotit ===0){
        for (let i = 0; i < keys.length; i++) {
            var k = keys[i];
            var mess = db[k].Message;
            var h = document.createElement("p");
            h.innerText = mess;
            j.appendChild(h);
            gotit = 1;
        }


    }
    else{
        var k = keys[keys.length -1];
        var mess = db[k].Message;
        var h = document.createElement("p");
        h.innerText = mess;
        j.appendChild(h);

    }


}

function errdata(data){
    console.log("errdata");
}

