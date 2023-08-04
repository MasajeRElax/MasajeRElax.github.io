function ocultar(){
    document.getElementById("masajes-reductores").style.display="none";
    document.getElementById("masajes-relajantes").style.display="none";
    document.getElementById("masajes-faciales").style.display="none";
    document.getElementById("masajes-moldeadores").style.display="none";
    document.getElementById("modReductores1").style.display="none";
    document.getElementById("modRelajantes1").style.display="none";
    document.getElementById("modFaciales1").style.display="none";
    document.getElementById("modMoldeadores1").style.display="none";
   

}

function mostrar1(){
    document.getElementById("masajes-reductores").style.display="block";
    document.getElementById("modReductores").style.display="none";
    document.getElementById("modReductores1").style.display="block";

}

function mostrar2(){
    document.getElementById("masajes-relajantes").style.display="block";
    document.getElementById("modRelajantes").style.display="none";
    document.getElementById("modRelajantes1").style.display="block";


}

function mostrar3(){
    document.getElementById("masajes-faciales").style.display="block";
    document.getElementById("modFaciales").style.display="none";
    document.getElementById("modFaciales1").style.display="block";

}

function mostrar4(){
    document.getElementById("masajes-moldeadores").style.display="block";
    document.getElementById("modMoldeadores").style.display="none";
    document.getElementById("modMoldeadores1").style.display="block";

}


function ocultar1(){
    document.getElementById("masajes-reductores").style.display="none";
    document.getElementById("modReductores").style.display="block";
    document.getElementById("modReductores1").style.display="none";
}

function ocultar2(){
    document.getElementById("masajes-relajantes").style.display="none";
    document.getElementById("modRelajantes").style.display="block";
    document.getElementById("modRelajantes1").style.display="none";
}

function ocultar3(){
    document.getElementById("masajes-faciales").style.display="none";
    document.getElementById("modFaciales").style.display="block";
    document.getElementById("modFaciales1").style.display="none";

}

function ocultar4(){
    document.getElementById("masajes-moldeadores").style.display="none";
    document.getElementById("modMoldeadores").style.display="block";
    document.getElementById("modMoldeadores1").style.display="none";
    
}

var images = document.querySelectorAll('#image-container img');
var currentImageIndex = 0;

setInterval(function() {
    images[currentImageIndex].style.opacity = '0';
    currentImageIndex++;
    if (currentImageIndex == images.length) {
        currentImageIndex = 0;
    }
    images[currentImageIndex].style.opacity = '1';
}, 3000);


function Historia(){
    window.location.href = 'Nosotros.html';
}

function Inicio(){
    window.location.href = 'Index.html';
    
}
window.addEventListener('DOMContentLoaded', function() {
    var bocina = document.getElementById('bocina');
    var audio = document.getElementById('audio');

    bocina.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0; // Reiniciar el audio al pausarlo
        }
    });
});
