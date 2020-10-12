//jshint esversion:6


const randomCard = Math.floor(Math.random()*3);
console.log(randomCard);
console.log(cards);



let juegoEmpezado = false;

// Array.prototype.sample = function(){
//   return this[Math.floor(Math.random()*this.length)];
// }                                                           <== randomCard hace la misma wea

  //////////////////////////////
 ///// Lista de cartas ////////
//////////////////////////////
const cards = [
    {
      source:"./img/pinochin.jpeg", 
  title:"Pinochin de copas",
  instructions:"Piscolits al seco perri3"
},{
    source:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZi3bKtkrdfs%2Fmaxresdefault.jpg&f=1&nofb=1",
  title:"EL Barney del 7",
  instructions:"juego del 7"
},{
    source: "https://www.eldesconcierto.cl/wp-content/uploads/2016/03/udi.jpg",
      title:"Jaimito",
  instructions:"Todos toman con la mano derecha hasta el siguiente Jaimito"
}
];


// crear objeto carta


function newCard() {    // TODO Cambiar por funcion que reciba objeto carta y ponga la info de cards

if (juegoEmpezado === false){
    
    
    // Image sample
    const carta = cards[randomCard];
    // carta = cards.sample();           <== constante de JP

/////////////////////////
    //  Nueva imagen
//////////////////////////
    const newImg = document.createElement("img");
    const img = document.getElementById("insertImg");

    const imgAtt = document.createAttribute("class");
    imgAtt.value = "carta-img";
    const src = document.createAttribute("src");
    src.value = carta.source


    img.appendChild(newImg);
    newImg.setAttributeNode(imgAtt);
    newImg.setAttributeNode(src);                       // crea imagen con sus clases correspondientes

/////////////////////////
    // Nuevo Texto
/////////////////////////
    const newText = document.createElement("h2");
    newText.innerText = carta.title
    const newSubText = document.createElement("p");
    newSubText.innerText = carta.instructions

    const text = document.getElementById("insertText");

    const textAtt = document.createAttribute("class");
    textAtt.value = "card-img-overlay";

    text.appendChild(newText);
    text.appendChild(newSubText);
    text.setAttributeNode(textAtt);                     // crea el texto correpondiente con sus atributos

    const buttonStart = document.getElementById("startBtn");//[?] porque tiene que estr esto aca?
    buttonStart.innerText = "Recoge otra carta";
/////////////////////////
    // crear Div carta
/////////////////////////
const cardDiv = document.getElementById("card");
const cardAtt = document.createAttribute("class");
cardAtt.value = "card";
cardDiv.setAttributeNode(cardAtt);                      //crea el div Card que contiene la imagen y el texto de la carta


/////////////////////////
// Toggle juegoEmpezado
/////////////////////////
    juegoEmpezado = true;
}

}
