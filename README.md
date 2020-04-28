# TRIBAL API CHALLENGE

## Instalar dependencias

Antes de poder correr la API, se deben instalar las dependencias.

Abre tu terminal y navega al folder del proyecto. Una vez estando dentro del proyecto corre el siguiente commando,

### `npm install`

## Correr la API

Dentro del root del proyecto puedes crear un archivo .env en caso de querer cambiar de puerto, si no es creado, el puerto por default es el 3000<br />

El comando para correr la API es:
### `npm start`

Esto debe de correr la api en el puerto que hayas puesto en tu archivo .env<br />

url: http://localhost:<'TU_PUERTO'>.

## Estructura

El core del proyecto se divide solamente en dos archivos: `server.js` y `services.js`. El primero es el archivo que inicializa el servidor y crea el endpoint `search`.
El segundo archivo es donde estan alojados los servicios que fueron utilizados para la prueba.