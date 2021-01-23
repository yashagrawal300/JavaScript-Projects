var pos = 10;
var c = 0;
var tasks = [];


function cr() {

        r = document.createElement("Button");
        k = document.getElementById("addTask");
        d = document.getElementById("nre");
        q = document.createElement("p");

        r.style.borderWidth = 5 +"px";
        r.style.borderColor = "rebeccapurple";

        r.id = c;


        r.style.top = pos + "px";
        r.style.position = "relative";
        r.innerText = k.value;
        tasks.push(k.value);


        r.onmouseenter = function(){
            this.innerText = "Delete";

        };
        r.onmouseleave = function(){

            this.innerText = tasks[this.id] ;
        };

        r.onclick = function() {
            this.remove();


    };
        c+=1;
        k.placeholder= "Enter Something";
        d.appendChild(q);
        d.appendChild(q)


        d.appendChild(r);

}

