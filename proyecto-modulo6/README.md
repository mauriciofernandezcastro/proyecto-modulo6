# TP Integrador JS - Modulo 6 - Mauricio Fernandez Castro

## Proyecto: Node & Express Web App - Solo Modulo 6

Este proyecto es la Parte 1 - Modulo 6. Cumple lo minimo para nota 4 en escala 1-7.
Codigo simple, sin cosas raras, compatible con Mac OS High Sierra.

### Por que elegi index.js?
Elegi index.js como archivo principal porque es el nombre por defecto que busca Node.js cuando uno hace `node .` o al instalar un proyecto. Es mas comun y simple que app.js para un proyecto inicial. Ademas funciona sin configurar nada extra.

### Por que esta estructura de carpetas?
- /routes: para separar las rutas
- /controllers: para poner la logica de cada ruta
- /middlewares: para el log
- /public: para archivos estaticos (pedido por la consigna)
- /logs: para guardar log.txt (persistencia en archivo plano)

Si no uso /public, la alternativa seria usar un motor de plantillas como EJS, pero para nota 4 es mas simple usar express.static().

### Requisitos del sistema
- Node.js v14 o superior (funciona en High Sierra, no necesita v18)
- npm v6 o superior
- Mac OS High Sierra compatible

### Instalacion
1. Descomprimir o clonar
2. Entrar a la carpeta: `cd proyecto-modulo6`
3. Instalar: `npm install`

### Ejecucion
- Normal: `npm start` -> ejecuta con node index.js
- Desarrollo: `npm run dev` -> ejecuta con nodemon (se reinicia solo)

Justificacion scripts:
- `start` es el estandar para produccion
- `dev` usa nodemon para no tener que reiniciar manual, es mas comodo para desarrollar

Luego abrir navegador en:
- http://localhost:3000/  -> devuelve HTML
- http://localhost:3000/status -> devuelve JSON
- http://localhost:3000/info.txt -> archivo estatico de /public

### Persistencia en archivo plano
Cada visita a / y /status se guarda en logs/log.txt con formato: fecha, hora, ruta
Se usa fs.appendFile() como pide la consigna. Ya tiene 3 accesos simulados.

### Capturas para entregar
1. Terminal con `npm run dev` y mensaje "Servidor iniciado"
2. Navegador en / y /status
3. Contenido de logs/log.txt

### Repositorio GitHub
Crear repo nuevo y subir todo. Ejemplo:
```
git init
git add .
git commit -m "Entrega modulo 6 - nota 4"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/tp-modulo6.git
git push -u origin main
```

### Reflexion tecnica breve
El servidor usa Express sobre Node. express.static sirve lo de /public. El middleware de log es simple y cumple la persistencia pedida. Queda listo para conectar base de datos en modulo 7.
