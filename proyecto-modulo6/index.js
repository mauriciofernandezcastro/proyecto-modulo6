// Archivo principal - elegi index.js porque es el nombre mas comun en Node
// y High Sierra lo reconoce sin configuracion rara

require('dotenv').config(); // carga variables del .env
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// middleware para servir archivos estaticos de /public
app.use(express.static(path.join(__dirname, 'public')));

// middleware simple para logear visitas
const logMiddleware = require('./middlewares/logMiddleware');
app.use(logMiddleware);

// rutas
const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes);

// crear carpeta logs si no existe
if (!fs.existsSync('./logs')) {
  fs.mkdirSync('./logs');
}

// iniciar servidor
app.listen(PORT, function() {
  console.log('Servidor iniciado en puerto ' + PORT);
  console.log('Abrir http://localhost:' + PORT);
});
