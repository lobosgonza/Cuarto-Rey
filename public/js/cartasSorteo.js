//jshint esversion:6

const cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


let juegoEmpezado = false


function newCard() {

if (juegoEmpezado === false){
    //  Nueva imagen
    const newImg = document.createElement("img");
    const img = document.getElementById("insertImg");

    const att = document.createAttribute("class");
    att.value = "carta-img";
    const src = document.createAttribute("src");
    src.value = "./img/pinochin.jpeg";


    img.appendChild(newImg);
    newImg.setAttributeNode(att);
    newImg.setAttributeNode(src);


    // Nuevos Texto
    const newText = document.createElement("h2");
    newText.innerText = "Pinochin de copas";
    const newSubText = document.createElement("p");
    newSubText.innerText = "Todos toman";

    const text = document.getElementById("insertText");

    const prop = document.createAttribute("class");
    prop.value = "carta-text bg-oscurecer";

    text.appendChild(newText);
    text.appendChild(newSubText);
    text.setAttributeNode(prop);

    const buttonStart = document.getElementById("startBtn");
    buttonStart.innerText = "Recoge otra carta";

    juegoEmpezado = true;
}

}