//jshint esversion:6


const add = document.getElementById("add");
const remove = document.getElementById("remove");
const playersCount = document.getElementById("numPlayers");


const currentDiv = document.getElementById("namePlayers");
const players=[];



const nombrePlayers = document.getElementById("namePlayers"); //El div de los inputs de los nombres de los jugadores

function incrementButton(){ // incrementButton(): incrementa en contador +1 y añade un input para rellenar nombre
    
    playersCount.stepUp(1);
    
    const newInput = document.createElement("INPUT");

if (players.length <= 9) {
    players.push("player " + (players.length + 1));
    newInput.setAttribute("id", players.length);
    nombrePlayers.appendChild(newInput);
}
    console.log(players)
}


// reduceButton() : baja el contador -1 y quita un input de los nombres
function reduceButton(){

    playersCount.stepDown(1);
    if(players.length > 0){
    players.pop();
    nombrePlayers.removeChild(document.getElementById(players.length+1));
  };
console.log(players)
}






  


