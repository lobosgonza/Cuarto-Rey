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
    res.render("home" )
})
app.post("/", ( req , res ) => {
const numMazos = req.body.mazos;

    res.render("game",{cantidadMazos:numMazos});

})




app.listen(port, () => {
    console.log(`Servidor conectado en http://localhost:${port}`)
})