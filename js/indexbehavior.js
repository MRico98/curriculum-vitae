var elementselected = 0;
var burguergrades = 0;
var paginas = ["<p>Sobre Mi</p>","<p>Curriculum</p>","<p>otros</p>","<p>Contactame</p>"];

$(document).ready(function(){
    setDisplayElement(document.getElementById("auxiliar"),"block");
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
    Funcion para asignar un display especifico a un elemento parametrizado
*/
function setDisplayElement(element,display){
    element.style.display = display;
}

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
            $("#auxiliar").fadeOut(250,function(){
                $("#auxiliar").empty();
                $("#auxiliar").append("<p>" + paginas[elementselected] + "</p>");
                $("#auxiliar").fadeIn(250);
            });
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

/*
    Funcion para realizar modificar el display del menu hamburguesa
*/
function menuHamburguerSection(){
    var menubar = document.querySelector("nav + div");
    if(menubar.style.display == "block"){
        menubar.style.display = "none";
        return;
    }
    menubar.style.display = "block";
}

/*
    Funcion para la rotacion del hambuguer menu
*/
function menuHamburguerRotation(){
    burguergrades = burguergrades + 90;
    document.getElementById("hamburguer").style.transform = "rotate(" + burguergrades + "deg)";
}