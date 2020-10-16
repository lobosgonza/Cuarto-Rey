//jshint esversion:6

const randomCard = Math.floor(Math.random() * 3);




let juegoEmpezado = false;

// Array.prototype.sample = function(){
//   return this[Math.floor(Math.random()*this.length)];
// }                                                           <== randomCard hace la misma wea

//////////////////////////////
///// Lista de cartas ////////
//////////////////////////////


const cards = [{
  id: 0,
  key: 0,
  source: "./img/pinochin.jpeg",
  title: "Yisus multiplica el copete",
  instructions: "Todos al Seco"
}, {
  id: 1,
  key: 1,
  source: "https://i.kym-cdn.com/photos/images/newsfeed/000/128/847/400x.jpg",
  title: "El Pana Greg",
  instructions: "Regala Uno"
}, {
  id: 2,
  key: 2,
  source: "https://www.infogate.cl/wp-content/uploads/2016/09/Nachito-Pop-Rejugados.jpg",
  title: "Nachito Pop",
  instructions: "El mas borracho o borracha toma"
}, {
  id: 3,
  key: 3,
  source: "https://www.eldesconcierto.cl/wp-content/uploads/2020/08/A_UNO_1204029_3f6de.jpg",
  title: "El Pizzas",
  instructions: "El mas ladrón toma."
}, {
  id: 4,
  key: 4,
  source: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZi3bKtkrdfs%2Fmaxresdefault.jpg&f=1&nofb=1",
  title: "El Barney del 7",
  instructions: "juego del 7"
}]


console.log(cards);

// crear objeto carta

Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
}


// crear objeto carta


function newCard() { // TODO Cambiar por funcion que reciba objeto carta y ponga wea en la wea

  if (juegoEmpezado === false) {

    // Image sample
    // const carta = cards[randomCard];
    carta = cards.sample();   // => Elige un element random
    console.log(carta);

    /////////////////////////
    //  Nueva imagen
    //////////////////////////
    /*
    const newImg = document.createElement("img");
    const img = document.getElementById("cardI");
    const imgAtt = document.createAttribute("class");
    imgAtt.value = "carta-img";
    const src = document.Attribute("src");
    src.value = carta.source
    document.images.namedItem("CardImg").src = carta.source;
    */
    // document.images[1].src = carta.source  


    /*
    img.appendChild(newImg);
    newImg.setAttributeNode(imgAtt);
    img.setAttributeNode(src);                       // crea imagen con sus clases correspondientes
    */
    /////////////////////////
    // Nuevo Texto
    /////////////////////////
    /*
    const newText = document.createElement("h2");
    newText.innerText = carta.title
    const newSubText = document.createElement("p");
    newSubText.innerText = carta.instructions

    const text = document.getElementById("insertText");

    const textAtt = document.createAttribute("class");
    textAtt.value = "card-img-overlay";

    text.appendChild(newText);
    text.appendChild(newSubText);
    text.setAttributeNode(textAtt);
    // crea el texto correpondiente con sus atributos

    */
   document.getElementById("CardImg").src = carta.source;
    document.getElementById("CardTitle").innerText = carta.title;
    document.getElementById("CardIns").innerText = carta.instructions;




    const buttonStart = document.getElementById("startBtn"); //Apunta al boton de iniciar y luego cambia el nombre del boton con Inner Text
    buttonStart.innerText = "Recoge otra carta";
    /////////////////////////
    // crear Div carta
    /////////////////////////
    const cardDiv = document.getElementById("card");
    const cardAtt = document.createAttribute("class");
    cardAtt.value = "card";
    cardDiv.setAttributeNode(cardAtt); //crea el div Card que contiene la imagen y el texto de la carta


    /////////////////////////
    // Toggle juegoEmpezado
    /////////////////////////
    juegoEmpezado = true;
  }

}