var elementselected = 0;
var burguergrades = 0;

$(document).ready(function(){
    setActionNavigatorButton($(".tool"));
    setActionNavigatorButton($(".hamburguertool"));
    document.getElementById("hamburguer").onclick = function(){
        menuHamburguerSection();
        menuHamburguerRotation();
    }
    window.addEventListener("resize",function(){
        document.querySelector("nav + div").style.display = "none";
        document.getElementById("hamburguer").style.transform = 'rotate(0deg)'
        burguergrades = 0;
    });
});

/*
    Funcion para cargar las acciones de cambio en los botones del navegador
*/
function setActionNavigatorButton(toolbarelements){
    forEach(toolbarelements,(element)=>{
        element.onclick = function(){
            $(".tool")[elementselected].classList.remove("selecttool");
            $(".hamburguertool")[elementselected].classList.remove("selecttool");
            elementselected = this.id.charAt(0);
            $(".tool")[elementselected].classList.add("selecttool");
            $(".hamburguertool")[elementselected].classList.add("selecttool");
        }
    });
}

/*
    Funcion para simular la interactividad del foreach en JSON
*/
function forEach(object,callback){
    for(var counter=0;counter<object.length;counter++){
        callback(object[counter]);
    }
}

function menuHamburguerSection(){
    var menubar = document.querySelector("nav + div");
    if(menubar.style.display == "block"){
        menubar.style.display = "none";
        return;
    }
    menubar.style.display = "block";
}

function menuHamburguerRotation(){
    burguergrades = burguergrades + 90;
    document.getElementById("hamburguer").style.transform = "rotate(" + burguergrades + "deg)";
}