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

var database = firebase.database();







firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        location.replace( "home.html");
        sessionStorage.setItem("email", user.email.slice(0, -4));





    } else {
        // User is signed out.
        // ...
    }
});





function login(){
    const loginemail = document.getElementById("loginEmail").value;
    const loginpassword = document.getElementById("loginPassword").value;

    firebase.auth().signInWithEmailAndPassword(loginemail, loginpassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);

        // ...
    });



}


function signup(){


    const email = document.getElementById("siginEmail");
    const password = document.getElementById("siginPassword");
    const username = document.getElementById("siginUsername")
    const repeatpassword = document.getElementById("siginRepeatPassword");


    if(password.value !== repeatpassword.value){
        alert("Enter the same password");
    }
    else {

        firebase.auth().createUserWithEmailAndPassword(email.value, password.value).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);

        });

        if (firebase.auth().currentUser){


            firebase.database().ref('users/' + email.value.slice(0, -4)).set({
                username: username.value,
                email: email.value
            });
        }




    }




}
