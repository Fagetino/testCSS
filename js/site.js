
//========================================= Domino de lettre =========================================

//--------------------- Variables ---------------------
var titresMenu = document.querySelectorAll("#menu li"); //Recuperation des titres du menu
var lettresTitre; //Objet content chaque lettre du titre du menu
var delay = 160; //temps entre chaque transition
var i //iterateur qui permet de multiplier le delay

//--------------------- Fonctions ---------------------
function rotationLettres(){
    //initialisation de i et du delay
    i=0;
    delay = 160;
    for (const titre of titresMenu) {
        //Recuperation de chaque lettre du menu
        lettresTitre = titre.children;
        for(const lettre of lettresTitre){
            //Ajout d'un delay de transition à la lettre
            lettre.style.transitionDelay = (delay*i) + "ms";
            i++;
        }     
    }
}

function rotationLettresRetour(){
    //initialisation de i et du delay
    delay = 50;
    i = lettresTitre.length-1;

    for (const titre of titresMenu) {
        //Recuperation de chaque lettre du menu
        lettresTitre = titre.children;
        for(const lettre of lettresTitre){
            //Ajout d'un delay de transition à la lettre
            lettre.style.transitionDelay = (delay*i) + "ms";
            i--;
        }     
    }
}

//--------------------- Évènements ---------------------
//Evenements effectuer lorque l'on passe la souris sur un des titre du menu
titresMenu.forEach(titre => {
    titre.addEventListener('mouseenter', rotationLettres);
    titre.addEventListener('mouseleave', rotationLettresRetour);
});

//========================================= Affichage CV et lettre de motivation =========================================

//--------------------- Variables ---------------------
var titreCV = document.getElementById("titreCV"); //Récupération du titre CV présent dans le menu
var titre = document.getElementById("titre"); //Récuperation du titre principale de la page
var menu = document.getElementById("menu"); //Récupération du menu
var cv = document.getElementById('cv'); //Récupération du cv
var ldm = document.getElementById('ldm'); //Récupération de la lettre de motivation
var flecheRetour = document.getElementById('flecheRetour'); //Récupération de la flèche de retour
var titreLdm = document.getElementById("titreLdm"); //Récupération du titre Lettre de motivation présent dans le menu

//--------------------- Fonctions ---------------------
function affichageElement(element){
    //On cache le titre principale de la page
    titre.style.transition = "opacity 800ms";
    titre.style.opacity = "0";

    //On cache le menu
    menu.style.transition = "opacity 800ms"
    menu.style.opacity = "0";
    
    //On affiche la fleche de retour
    flecheRetour.style.position = "absolute";
    flecheRetour.style.transition = "opacity 800ms";
    flecheRetour.style.opacity = "1";
    flecheRetour.style.pointerEvents = "auto";

    //On affiche l'élément au centre de la page
    element.style.position = "absolute";
    element.style.transition = "opacity 800ms";
    element.style.opacity = "1";
    element.style.height = "1080px";
}

function clickFlecheRetour(){
    //On affiche le titre principale de la page
    titre.style.transition = "opacity 300ms";
    titre.style.opacity = "1";

    //On affiche le menu de la page
    menu.style.transition = "opacity 1000ms";
    menu.style.opacity = "1";
    
    //On cache la flèche de retour
    flecheRetour.style.position = "auto";
    flecheRetour.style.transition = "opacity 800ms";
    flecheRetour.style.opacity = "0";
    flecheRetour.style.pointerEvents = "none";

    //on cache le CV
    cv.style.position = "auto";
    cv.style.transition = "opacity 800ms, height 0ms 750ms";
    cv.style.opacity = "0";
    cv.style.height = "0";

    //on cache le ldm
    ldm.style.position = "auto";
    ldm.style.transition = "opacity 800ms, height 0ms 750ms";
    ldm.style.opacity = "0";
    ldm.style.height = "0";
}


//--------------------- Évènements ---------------------
//Evenement effectuer au click sur le titre CV du menu 
titreCV.addEventListener("click", function(){affichageElement(cv);});

//Evenement effectuer au click sur le titre Lettre de motivation du menu 
titreLdm.addEventListener("click", function(){affichageElement(ldm);});

//Evenement effectuer au click sur la flèche retour 
flecheRetour.addEventListener("click", clickFlecheRetour);