const express = require('express');
const rutas = express.Router();

rutas.get("/", (req,res) => {
	res.send("<marquee direction = 'up'>Hola mundo pero en node jajaja ");
});
 
module.exports = rutas;