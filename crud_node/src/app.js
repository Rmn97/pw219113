const express = require('express');
const app = express();

//Importamos las rutas atráves de una constante
const indiceRutas = require ('./rutas/index');

//Usar las rutas
app.use("/", indiceRutas);

//Servidor que escuche
app.listen(3000, ()=>{
	console.log("Servidor escuchando en puerto 3000");
});