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



function LogIn(){
    var a = document.getElementById("LogInEmail").value;

    var b = document.getElementById("LogInPassword").value;


    auth.loginWith
}





function enter(){
    const a = document.getElementById("userName");
    const b = document.getElementById("channelName");



    sessionStorage.setItem("userName" , a.value);
    sessionStorage.setItem("channelName" , b.value);

    location.href = "home.html";
}
