//jshint esversion:6


const add = document.getElementById("add");
const remove = document.getElementById("remove");
const playersCount = document.getElementById("numPlayers");


const currentDiv = document.getElementById("namePlayers");

function incrementButton(){ // incrementButton(): incrementa en contador +1 y añade un input para rellenar nombre
    
playersCount.stepUp(1);

    const players=[];
    
    for (i = 0; i < playersCount.value; i++) {
        players.push("player "+ (i+1));
    };
    console.log(players)
}





// reduceButton() : baja el contador -1 y quita un input de los nombres
function reduceButton(){
    playersCount.stepDown(1);


    currentDiv.removeChild(document.getElementById("player " + playersCount.value))



}






  


