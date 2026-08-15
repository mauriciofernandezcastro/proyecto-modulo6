# proyecto-modulo6
trabajo para aprobar modulo 6

# Módulo 6

Proyecto básico para cumplir con la entrega del Módulo 6.

## Requisitos del sistema
- Node.js v18 o superior
- npm

## Instalación
1. Descomprimir el zip
2. npm install

## Ejecución
- npm start -> inicia con node app.js
- npm run dev -> inicia con nodemon

Servidor en: http://localhost:3000
- / -> HTML
- /status -> JSON

## Estructura de carpetas
- app.js: Elegí app.js en vez de index.js porque es más descriptivo para una app Express. Es el estándar que usa la documentación de Express.
- routes/: Manejo de rutas.
- controllers/: Lógica de las rutas.
- middlewares/: Middleware de logs.
- services/: Carpeta preparada para la lógica de negocio del Módulo 7.
- public/: Contenido estático servido con express.static().
- logs/: Persistencia en archivos planos con log.txt.

## Persistencia en archivos planos
Se usa fs.appendFile() en middlewares/logger.js. Cada visita a / y /status guarda fecha, hora y ruta accedida en logs/log.txt. Ya tiene 3 registros de ejemplo.

## Scripts
- start: Para producción.
- dev: Para desarrollo con reinicio automático con nodemon.

## Justificación de decisiones
- No uso motor de plantillas (ejs) en esta entrega para mantenerlo simple, se usa HTML estático desde /public, que cumple el requerimiento.
- Uso dotenv para el puerto, para preparar el proyecto para los Módulos 7 y 8.
