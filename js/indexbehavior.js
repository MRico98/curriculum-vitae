var elementselected = 0;
var burguergrades = 0;
var aboutme = '<div class="titulossection bold lora"><span>SOBRE MÍ</span></div><div  class="opensans"><div class="infocolumn"><div class="aboutmeinfo"><span class="semibold">NOMBRE</span><span>Manuel Martin Rico</span></div><div class="aboutmeinfo"><span class="semibold">LOCACION</span><span>Mérida, Yucatán</span></div><div class="aboutmeinfo"><span class="semibold">ALMA MATER</span><span>Facultad de matematicas - UADY</span></div><div class="aboutmeinfo"><span class="semibold">TRABAJO ACTUAL</span><span>desarrollador de software en walook</span></div></div><div class="infocolumn"><div class="aboutmeinfo"><span class="semibold">EDAD</span><span>21 años</span></div><div class="aboutmeinfo"><span class="semibold">TITULO</span><span>Ingeniero de software (60%)</span></div><div class="aboutmeinfo"><span class="semibold">TELEFONO</span><span>9993522430</span></div><div class="aboutmeinfo"><span class="semibold">NIVEL DE INGLES</span><span>B1</span></div></div></div><div class="titulossection bold lora"><span>ESTUDIANTE DE INGENIERIA DE SOFTWARE</span></div><div id="bio" class="opensans"><p>Estudiante de ingenieria de software con 21 años de edad, actualmente recido en merida,Yucatan. Trabajo desde hace un año (Jun 2019) a medio tiempo en Walook Mexico,como desarrollador de software. </p><p>Mi enfoque profesional es el desarrollo de software a plenitud; formalizar y estandarisarcada etapa del proceso de desarrollo y entregar un producto que mejore la calidad devida del usuario. Continuamente busco mejorar mi trabajo y mi desempeño como desarrollador,me mantengo a la vanguardia en cuanto a las tecnologias mas solicitadas en el mercado ybusco un balance entre mi vida laboral y mi vida persona.</p><p>Me gusta mucho aprender, me emociona la idea de saber un nuevo lenguaje, paradigma,metodologia o lo que sea necesario. Tambien me considero competitivo, pero de unamanera sana y profesional. Trabajo bien en equipo, me gusta aportar en la cooperacion y laorganizacion</p><p>Tambien me gusta la pizza y el futbol</p></div><div class="titulossection bold lora"><span>SERVICIOS</span></div><div class="opensans"><div id="seccionservicios"><div class="service"><picture><img src="images/aboutmeimages/Backend_icon.png"></picture><span class="semibold">Back-End</span><p>He desarrollador back-end utilizando PHP nativoy en los frameworks Laravel y Yii</p></div><div class="service"><picture><img src="images/aboutmeimages/Frontend_icon.png"></picture><span class="semibold">Front-End</span><p>He diseñado front-end con herramientas de HTML5(Javascript, CSS y HTML), tambien he manejadolibrerias como jQuery y Bootstrap</p></div><div class="service"><picture><img src="images/aboutmeimages/Cleancode_icon.png"></picture><span class="semibold">Clean code</span><p>Para la calidad del codigo utilizo metodos de CodeRefactoring y baso mis estandares en libros como“The Clean Code”, “The Clean Coder” y “Code Complete”</p></div><div class="service"><picture><img src="images/aboutmeimages/Diseno_icon.png"></picture><span class="semibold">Diseño de software</span><p>Para el diseño, utilizo distintos diagramas UML, tiposecuencia, clases, de despliegue, etc.  Diseño softwareutilizando distintos patrones de diseño creacionales,estructurales y de comportamiento</p></div><div class="service"><picture><img src="images/aboutmeimages/BDD_icon.png"></picture><span class="semibold">Diseño de base de datos</span><p>He manejado distintos gestores de base de datos talescomo: MySQL, PostgreSQL y SQL server. Tambien se creardiseños entidad-relacion avanzados.</p></div><div class="service"><picture><img src="images/aboutmeimages/Devops_icon.png"></picture><span class="semibold">DevOps</span><p>En cuanto al Developer Operations, tengo experienciamanejando el sistema de Ci Jenkins e implementandolocon gestionadores de paquetes tales como composer omaven, y tambien con analizadores de codigo como SonaQube.Tambien se utilizar “Docker” para gestionar contenedores ydesplegar mis aplicaciones.</p></div></div></div>';
var paginas = [aboutme,"<p>Curriculum</p>","<p>otros</p>","<p>Contactame</p>"];

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