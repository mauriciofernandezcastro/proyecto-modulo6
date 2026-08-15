function home(req, res) {
  res.send('<h1>Bienvenido a mi App - Modulo 6</h1><p>Esta es la ruta principal / en HTML</p><p><a href="/status">Ver status en JSON</a></p><p><a href="/info.txt">Ver archivo estatico</a></p>');
}

function status(req, res) {
  res.json({
    status: 'ok',
    message: 'Servidor funcionando correctamente',
    fecha: new Date().toString()
  });
}

module.exports = {
  home: home,
  status: status
};
