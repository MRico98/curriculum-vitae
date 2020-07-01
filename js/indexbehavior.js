var elementselected;
var burgerelementselected;

$(document).ready(function(){
    elementselected = 0;
    setActionNavigatorButton($(".tool"));
    setActionNavigatorButton($(".hamburguertool"));
    document.getElementById("hamburguer").onclick = function(){
        var menubar = document.querySelector("nav + div");
        if(menubar.style.display == "block"){
            menubar.style.display = "none";
            return;
        }
        menubar.style.display = "block";
    }

    window.addEventListener("resize",function(){
        document.querySelector("nav + div").style.display = "none";
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
