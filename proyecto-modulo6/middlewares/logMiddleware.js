const fs = require('fs');
const path = require('path');

function logMiddleware(req, res, next) {
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
  next();
}

module.exports = logMiddleware;
