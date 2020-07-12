var elementselected = 0;
var burguergrades = 0;
var resume = '<div class="titulossection bold lora"><span>BIOGRAFIA Y SKILLS</span></div><div class="opensans"><div id="bioyskills"><p>Naci el primero de octubre de 1998 en Merida, Yucatan. Mi primerainteraccion con la computacion ocurrio hasta mi primer año de preparatoria,en el Centro de Bachillerato Tecnologico e Industria donde me grague denivel medio superior en programacion y recibi certificaciones en:Administracion de sistemas operativos, Instalacion y configuracion deaplicaiones y servicios, Desarrollo de aplicaciones web, Desarrllo deaplicaciones moviles, entre otros.</p><p>En el año 2016, entre a la facultad de matematicas de la UADY, para cursarla carrera de ingenieria de software. Me he formado para crear software decalidad y fomentar las buenas practicas en el desarrollo de software.Actualmente estoy cursando mi septimo semestre. </p><p>En Junio del 2019, entre como interno a Walook México. En un principio memantuve en un proyecto interno realizado en Yii y utilizando procesos ETL.Despues pase a realizar labores de devops con el sistema de CI jenkins, dandolemantenimiento y monitoreando su aplicacion en los proyectos de la empresa.Tambien instale y administre el analizador de codigo SonarQube que se implementabaen el analisis continuo de Jenkins. Igual adminstre servidores con sistemasoperativos como (windows server 2012 y Ubuntu 18). Finalmente, en mi etapafinal como junior devops me capacite con Docker para la gestion de contenedores.Actualmente me encuentro trabajando con Flutter para el desarrollo de aplicacionesmoviles. Tambien tengo un ligero conocimineto de cloud computing con azure.</p></div></div><div class="titulossection bold lora"><span>HARD SKILLS</span></div><div><div class="hardskills opensans"><div class="hardskillsection"><span class="semibold">Lenguajes de programacion</span><span>C, Java, PHP, Javascript, Dart</span></div><div class="hardskillsection"><span class="semibold">Herramientas de diseño y prototipado</span><span>CSS, HTML, InVision, Figma</span></div><div class="hardskillsection"><span class="semibold">Tecnologias</span><div><div><h5 class="semibold">Herramientas de devops:</h5> Jenkins, Docker</div><div><h5 class="semibold">Servidor:</h5> Nginx, Apache, Tomtcat</div><div><h5 class="semibold">DBMS:</h5> MySQL, PostgreSQL, Microsoft SQL Server</div><div><h5 class="semibold">Analizador de codigo:</h5> SonarQube</div><div><h5 class="semibold">Control de versiones:</h5>Git, Subversion</div><div><h5 class="semibold">Sistemas operativos:</h5> Ubuntu 18 (Cliente y Administrador), Windows Server 2012 (Cliente y Administrador)</div><div><h5 class="semibold">IDE:</h5> Intellij, Visual Studio Code, Netbeans, PhpStorm</div><div><h5 class="semibold">Administradores de dependencias:</h5> Maven, Composer, NPM</div></div></div><div class="hardskillsection"><span class="semibold">Frameworks</span><span>Laravel, Flutter</span></div><div class="hardskillsection"><span class="semibold">Metodologias de desarrollo</span><span>Laravel, Flutter</span></div><div class="hardskillsection"><span class="semibold">Otros conceptos</span><span>MVC, API REST, UML, JSON, Postman, Swagger, Patrones dediseño en Flutter (BLOC y Provider), SQL Server Integration Servicesi</span></div></div></div><div class="titulossection bold lora"><span>SOFT SKILLS</span></div><div><div id="softskills" class="opensans"><div class="softskillscolumn"><ul><li>Profesional</li><li>Persistente</li><li>Disciplinado</li></ul></div><div class="softskillscolumn"><ul><li>Autodidacta</li><li>Honesto</li><li>Con liderazgo</li></ul></div><div class="softskillscolumn"><ul><li>Caracter constructivo</li><li>Competitivo</li><li>Apasionado</li></ul></div></div></div><div class="titulossection bold lora"><span>EXPERIENCIA LABORAL</span></div><div id="blockexperiencesection" class="opensans"><div class="experiencesection"><div class="leftsite opensans"><span class="semibold">2019 - Actualidad</span><span class="italic">Desarrollador de software</span><span class="italic">Junior DevOps</span><picture><img src="images/Walook_logo.png"></picture></div><div class="rightside"><h5 class="semibold">Walook | Mérida, Yucatan</h5><p>Trabaje en walook como practicante desde junio del 2019 hastala actualidad. Inicie en un proyecto interno para la gestionde los equipos de trabajo utilizando API REST de la paginaAssembla, me enfoque en el back-end consumiendo la informaciondel sitio mediante un proceso ETL y fue mi primera experienciaen un proyecto real y utilizando la metodologia de desarrolloagil “Scrum”.</p><p>Seguido de esto, realize labores de devops, utilizando elservidro CI jenkins y desplegando aplicaciones en Docker.Tambien estuve como administrador de los distintos servidores(Windows server 2012 y ubuntu 18) de la empresa.</p><p>Actualmente me encuentro capacitandome en Flutter para el desarrollode aplicaciones en dispositivos moviles</p></div></div></div><div class="titulossection bold lora"><span>EDUCACION Y CERTIFICADOS</span></div><div id="education"  class="opensans"><div class="experiencesection"><div class="leftsite opensans"><span class="semibold">2017 - Actualidad</span><picture><img src="images/FMAT_image.png"></picture></div><div class="rightside"><h5 class="semibold">Facultad de matematicas - UADY</h5><span class="italic">Carrera: Ingenieria de software</span></div></div><div class="experiencesection"><div class="leftsite opensans"><span class="semibold">2014 - 2017</span><picture><img src="images/DGETI_image.png"></picture></div><div class="rightside"><h5 class="semibold">Centro de Bachillerato Tecnologico Industrial y de Servicios No. 95</h5><h5 class="semibold">Certificados:</h5><ul class="light italic"><li>Constancia de competencia “Modulo ll. DESARROLLA SOFTWARE DE APLICACION UTILIZANDOPROGRAMACION ORIENTADA A OBJETOS, CON ALMACENAMIENTO PERSISTENTE DE LOS DATOS”</li><li>Constancia de competencia “Modulo lll. DESARROLLA APLICACIONES WEB Y MOVILES”</li><li>Constancia de competencia “Modulo lV. ADMINISTRA SISTEMAS OPERATIVOS, DE APLICACIONES Y SERVICIOS”</li><li>Constancia de competencia “Modulo V. DESARROLLA, ADMINISTRA Y CONFIGURA SOLUCIONES DE E-LEARNING YCOMERCIO ELECTRONICO”</li></ul></div></div></div>';
var paginas = ["<p>Sobre Mi</p>",resume,"<p>otros</p>","<p>Contactame</p>"];

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