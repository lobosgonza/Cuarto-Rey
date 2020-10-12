//jshint esversion:6

const express = require('express')
const ejs = require('ejs');
var bodyParser = require('body-parser')


const app = express()
const port = 3000


app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render("cuartoRey" )
})
app.post("/", ( req , res ) => {
const data = req.body;
const numMazos = data.mazos;
const numJugadores = data.playerBox;

//  console.log(data)
// TODO: Arreglar esto para usar un array

const p1 = data.player1;
const p2 = data.player2;
const p3 = data.player3;
const p4 = data.player4;
const p5 = data.player5;
const p6 = data.player6;
const p7 = data.player7;
const p8 = data.player8;
const p9 = data.player9;
const p10 = data.player10;

let jugadores = [];

switch (numJugadores){
    case "1": jugadores.push(p1);
    break;
    case "2": jugadores.push(p1,p2);
    break;
    case "3": jugadores.push(p1,p2,p3);
    break;
    case "4": jugadores.push(p1, p2, p3, p4);
    break;
    case "5": jugadores.push(p1, p2, p3, p4, p5);
    break;
    case "6": jugadores.push(p1, p2, p3, p4, p5, p6);
    break;
    case "7": jugadores.push(p1, p2, p3, p4, p5, p6, p7);
    break;
    case "8": jugadores.push(p1, p2, p3, p4, p5, p6, p7, p8);
    break;
    case "9": jugadores.push(p1, p2, p3, p4, p5, p6, p7, p8, p9);
    break;
    case "10": jugadores.push(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10);
    break;
    default:
    console.log('No hay Jugadores Asignados');
};

console.log(jugadores);


    res.render("game",{cantidadMazos:numMazos, numJugadores: jugadores });


})




app.listen(port, () => {
    console.log(`Servidor conectado en http://localhost:${port}`)
})
