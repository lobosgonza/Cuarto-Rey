let cartasUtilizadas = [];
const pintasSet = ["Pica", "Trebol", "Corazon", "Diamante"]


function randomCard(){
    const randomNumber = Math.ceil(Math.random() * 13);
    const randomPinta = Math.floor(Math.random() * 4);


    document.getElementById('number').innerHTML ="Numero: " + randomNumber;
    document.getElementById('pinta').innerHTML = "Pinta: " + pintasSet[randomPinta];



    const cartaActiva = randomNumber + " " + pintasSet[randomPinta];



    // Antes debe evaluarse si dentro del array cartaActiva no esta repetido mas de 4 veces. Si cartaActiva está reeptido 1 o mas veces, el sistema debe volver a lanzar una carta Activa

const filtroCartaActiva = cartasUtilizadas.filter(
    (value)=>{
        return value === cartaActiva
    }
    );

const longitudCartaActiva = filtroCartaActiva.length;
console.log(cartaActiva);

if (cartasUtilizadas.length < 52){
    pushCard()
}else{
    alert("no quedan mas cartas")
}

function pushCard(){
if (longitudCartaActiva >= 1){ 
   randomCard()
} else {
    cartasUtilizadas.push(cartaActiva)
}
}


 
    
    
    
    console.log(cartasUtilizadas.sort());
return cartasUtilizadas;
}