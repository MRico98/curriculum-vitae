var elementselected = 0;
var burguergrades = 0;
var others = '<div class="titulossection bold lora"><span>LIBROS FAVORITOS</span></div><div class="opensans centersection"><div><picture><img src="images/TomSawyer_image.jpg" alt="tom sawyer"></picture><h4 class="semibold">Las aventuras de Tom Sawyer</h4><h5 class="regular">Mark Twain</h5></div><div><picture><img src="images/IDS_image.jpg" alt="tom sawyer"></picture><h4 class="semibold">Ingenieria del software: Un enfoque practico</h4><h5 class="regular">Roger Pressman</h5></div><div><picture><img src="images/RELG_image.jpg" alt="tom sawyer"></picture><h4 class="semibold">Rebelion en la granja</h4><h5 class="regular">George Orwell</h5></div></div><div class="titulossection bold lora"><span>OTROS INTERESES</span></div><div class="opensans centersection"><div><picture><img src="images/Dog_icon.png" alt="dog"></picture></div><div><picture><img src="images/Ball_icon.png" alt="dog"></picture></div><div><picture><img src="images/Pizza_icon.png" alt="dog"></picture></div></div>';
var paginas = ["<p>Sobre Mi</p>","<p>Curriculum</p>",others,"<p>Contactame</p>"];

$(document).ready(function(){
    setDisplayElement(document.getElementById("changesection"),"block");
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
            $("#changesection").fadeOut(250,function(){
                $("#changesection").empty();
                $("#changesection").append(paginas[elementselected]);
                $("#changesection").fadeIn(250);
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