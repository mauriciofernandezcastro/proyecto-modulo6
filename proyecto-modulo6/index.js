require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

const logMiddleware = require('./middlewares/logMiddleware');
app.use(logMiddleware);


const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes);

if (!fs.existsSync('./logs')) {
  fs.mkdirSync('./logs');
}

app.listen(PORT, function() {
  console.log('Servidor iniciado en puerto ' + PORT);
  console.log('Abrir http://localhost:' + PORT);
});
