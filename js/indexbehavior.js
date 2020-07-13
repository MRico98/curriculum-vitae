var elementselected = 0;
var burguergrades = 0;
var contactme = '<div class="titulossection bold lora"><span>CONTACTÁME</span></div><div id="iconssection" class="opensans"><div><a href="https://www.instagram.com/ric.x/" target="_blank"><div><picture><img src="images/Instagram_icon.png" alt="instagram"></picture><h4 class="regular">ric.x</h4></div></a><div><picture><img src="images/Whatsapp_icon.png" alt="whatsapp"></picture><h4 class="regular">+52 1 999 352 2430</h4></div><a href="https://www.linkedin.com/in/manuelmartinrico/" target="_blank"><div><picture><img src="images/Linkedin_icon.png" alt="linkedin"></picture><h4 class="regular">Manuel Rico</h4></div></a></div><div><a href="mailto:ManuelRico98@outlook.es" target="_blank"><div><picture><img src="images/Outlook_icon.png" alt="instagram"></picture><h4 class="regular">ManuelRico98@outlook.es</h4></div></a><a href="mailto:manuelmartinrico1998@gmail.com" target="_blank"><div><picture><img src="images/gmail_icon.png" alt="instagram"></picture><h4 class="regular">manuelmartinrico1998@gmail.com</h4></div></a></div><div><a href="https://github.com/MRico98" target="_blank"><div><picture><img src="images/Github_icon.png" alt="instagram"></picture><h4 class="regular">MRico98</h4></div></a></div></div>';
var paginas = ["<p>Sobre Mi</p>","<p>Curriculum</p>","<p>contactme</p>",contactme];

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