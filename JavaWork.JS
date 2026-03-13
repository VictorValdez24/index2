
//Modo claro

function cambiarModo(){

document.body.classList.toggle("modo-claro");

if(document.body.classList.contains("modo-claro")){
localStorage.setItem("modo","claro");
}else{
localStorage.setItem("modo","oscuro");
}

}

document.addEventListener("DOMContentLoaded", function(){

let modoGuardado = localStorage.getItem("modo");

if(modoGuardado === "claro"){
document.body.classList.add("modo-claro");
}

});

// Alerta Braw

function mensajeJuego(){

alert("¡BRAWHALLA ES UNO DE LOS MEJORES JUEGOS DE PELEA!");

}

// Alerta Warzone
function mensajeWarzone(){

alert("¡WARZONE ES UNO DE LOS BATTLE ROYALE MAS INTENSOS!");

}