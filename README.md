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

## Estructura del proyecto

El proyecto se divide en tres partes:

* El directorio `api`, en donde encontramos el archivo que contiene el endpoint `/search`.
* El directorio `services`, en donde encontramos el archivo que contiene las funciones para consumir las APIs terceras. En este caso solo esta el archivo `search.js`
* El archivo `server.js`, en donde alojamos el core de la API e inicializamos el servidor.

## Documentación visual

La API utiliza la herramienta **Swagger UI** para tener una visualización mas amigable de la API.

* Para ver la documentación creada con Swagger, ingresa a la url: http://localhost:<'TU_PUERTO'>/api-docs



**Estructura de /search**
----
  Retorna un json con datos encontrados a partir de las APIs consumidas.

* **URL**

  /search/:term

* **Metodo:**

  `GET`

*  **Parametros**

   `term=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ term : 'Justin Bieber' }`

* **Error Response:**

  * **Code:** 422 <br />
    **Content:** `{ error : "No se pudo procesar una entidad" }`

* **Result:**

  ```json
    {
    "resultCount": 64,
    "results": [
        {
            "service": "itunesMusic",
            "type": "song",
            "name": "Intentions (feat. Quavo)",
            "url": "https://music.apple.com/us/album/intentions-feat-quavo/1496639180?i=1496639586&uo=4"
        },
        {
            "service": "itunesMusic",
            "type": "song",
            "name": "10,000 Hours",
            "url": "https://music.apple.com/us/album/10-000-hours/1481229016?i=1481229017&uo=4"
        },
        {
            "service": "itunesMusic",
            "type": "song",
            "name": "I Don't Care",
            "url": "https://music.apple.com/us/album/i-dont-care/1464549183?i=1464549844&uo=4"
        },
        {
            "service": "itunesMusic",
            "type": "song",
            "name": "Yummy",
            "url": "https://music.apple.com/us/album/yummy/1492502421?i=1492502431&uo=4"
        },
        {
            "service": "itunesMusic",
            "type": "song",
            "name": "As Long As You Love Me (feat. Big Sean)",
            "url": "https://music.apple.com/us/album/as-long-as-you-love-me-feat-big-sean/1440650852?i=1440650859&uo=4"
        },
      ]
    }
  ```