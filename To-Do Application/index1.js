var pos = 10;
var c = 0;


function cr() {

        r = document.createElement("Button");
        k = document.getElementById("addTask");
        d = document.getElementById("nre");
        q = document.createElement("p");

        r.style.borderWidth = 5 +"px";
        r.style.borderColor = "rebeccapurple";
        r.style.


        r.id = c;


        r.style.top = pos + "px";
        r.style.position = "relative";
        r.innerText = k.value;
        r.onclick = function() {
            this.remove();

    };
        c+=2;
        k.value= "Enter Something";
        d.appendChild(q);
        d.appendChild(q)


        d.appendChild(r);

}

