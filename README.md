# Trabajo Modulo 6

Alumno: Mauricio Fernandez Castro
Proyecto de Node y Express

## Que es esto
Este es el trabajo del modulo 6. Es un servidor simple que muestra una pagina y un json.

## Porque use index.js
Use index.js porque es el que usa todo el mundo por defecto y es mas facil. No hay que configurar nada.

## Carpetas
- routes: donde estan las rutas
- controllers: donde esta lo que hacen las rutas
- middlewares: para guardar el log
- public: para el archivo estatico info.txt
- logs: donde se guarda log.txt

Si no usaba /public usaria EJS pero es mas complicado y para un 4 no hace falta.

## Que necesita
- Node 14 o mas (yo tengo 14.21.3 porque mi mac es High Sierra y no me deja instalar Node 18)
- npm

## Como instalar
1. bajar el zip
2. entrar a la carpeta
3. npm install

## Como correr
npm start -> corre normal
npm run dev -> corre con nodemon y se reinicia solo

Yo use esos 2 scripts porque son los que pide el profe.

Despues abrir en el navegador:
http://localhost:3000/
http://localhost:3000/status
http://localhost:3000/info.txt

## El log
Cada vez que entro a / o /status se guarda en logs/log.txt la fecha y la ruta. Use fs.appendFile como dice la guia. Ya tiene 3 lineas de prueba.

## Para github
git init
git add .
git commit -m "modulo 6"
git push

Eso nomas.
