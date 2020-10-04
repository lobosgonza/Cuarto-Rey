const cartasUtilizadas = [];
const pintasSet = ["Pica", "Trebol", "Corazon", "Diamante"]
const reyes = []


function randomCard(){

    // Generador de numeros + pinta
    const randomNumber = Math.ceil(Math.random() * 13);
    const randomPinta = Math.floor(Math.random() * 4);


    document.getElementById('number').innerHTML ="Numero: " + randomNumber;
    document.getElementById('pinta').innerHTML = "Pinta: " + pintasSet[randomPinta];



    const cartaActiva = randomNumber + " " + pintasSet[randomPinta];

  

   
  


    // Antes debe evaluarse si dentro del array cartaActiva no esta repetido mas de 4 veces. Si cartaActiva está reptido 1 o mas veces, el sistema debe volver a lanzar una carta Activa

const filtroCartaActiva = cartasUtilizadas.filter(
    (value)=>{
        return value === cartaActiva
    }
    );

const longitudCartaActiva = filtroCartaActiva.length;
console.log(cartaActiva);


// Condicional de Finalizacion de Juego
if (cartasUtilizadas.length >= 52 || reyes.length > 4 ){


}else{
    pushCard()
}


// La carta va al array
function pushCard(){
if (longitudCartaActiva >= 1){ 
   randomCard()
} else {
    cartasUtilizadas.push(cartaActiva)
};

//Reyes van a array Reyes
if (randomNumber === 13){
    reyes.push(cartaActiva); 
    console.log(reyes)
};
}


    
    
    console.log(cartasUtilizadas.sort());

}