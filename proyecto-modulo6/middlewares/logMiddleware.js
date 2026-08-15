// Middleware que guarda fecha, hora y ruta en logs/log.txt
const fs = require('fs');
const path = require('path');

function logMiddleware(req, res, next) {
  // solo logueamos las rutas principales para cumplir con 3 accesos
  if (req.url === '/' || req.url === '/status') {
    const fecha = new Date();
    const fechaStr = fecha.toLocaleDateString();
    const horaStr = fecha.toLocaleTimeString();
    const texto = fechaStr + ' - ' + horaStr + ' - Ruta: ' + req.url + '\n';

    const logPath = path.join(__dirname, '..', 'logs', 'log.txt');
    // appendFile guarda sin borrar lo anterior
    fs.appendFile(logPath, texto, function(err) {
      if (err) {
        console.log('Error al escribir log');
      }
    });
  }
  next(); // sigue a la siguiente ruta
}

module.exports = logMiddleware;
