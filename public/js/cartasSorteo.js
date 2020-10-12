//jshint esversion:6

const cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const randomCard = Math.floor(1 + Math.random()*2);



let juegoEmpezado = false


function newCard() {

if (juegoEmpezado === false){
/////////////////////////
    //  Nueva imagen
//////////////////////////
    const newImg = document.createElement("img");
    const img = document.getElementById("insertImg");

    const imgAtt = document.createAttribute("class");
    imgAtt.value = "carta-img";
    const src = document.createAttribute("src");
    
    if(randomCard === 1){
    src.value = "./img/pinochin.jpeg";
    }else if (randomCard === 2){
         src.value = "./img/ecceHomo.jpg";
    };
    console.log(randomCard);

    img.appendChild(newImg);
    newImg.setAttributeNode(imgAtt);
    newImg.setAttributeNode(src);                       // crea imagen con sus clases correspondientes

/////////////////////////
    // Nuevo Texto
/////////////////////////
    const newText = document.createElement("h2");
    newText.innerText = "Pinochin de copas";
    const newSubText = document.createElement("p");
    newSubText.innerText = "Piscolits al seco perri3";

    const text = document.getElementById("insertText");

    const textAtt = document.createAttribute("class");
    textAtt.value = "card-img-overlay";

    text.appendChild(newText);
    text.appendChild(newSubText);
    text.setAttributeNode(textAtt);                     // crea el texto correpondiente con sus atributos

    const buttonStart = document.getElementById("startBtn");
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