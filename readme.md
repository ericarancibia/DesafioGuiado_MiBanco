# Desafío Guiado, Modulo VII - Mi Banco.

## Descripción del proyecto

Validación conocimientos de Transacciones, Captura de errores en transacciones. 

## Prerrequisitos o Dependencias
- Windows, Mac, Linux.
- Javascript, PostgreSQL, Node.js.
- Visual Studio Code.
- PGAdmin o DBeaver.
- Postman

### Para inicializar el programa se requiere:

1. Instalar las dependencias Express, PG y DOTENV usadas con el comando `npm i express pg dotenv`.
2. Se requiere crear una database en postgres llamada Banco usando las consultas de la carpeta SQL.
3. Crear un archivo `.env` con las variables de entorno necesarias (DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE).

### Ejemplos de uso en Postman:

Para usar las rutas definidas en el archivo router.js en Postman, sigue estos pasos:

1. Ruta para la página de inicio:
Método: GET
URL: http://localhost:3000/

Haz clic en "Send" para enviar la solicitud y recibir la respuesta de la página de inicio.

2. Ruta para agregar una cuenta:
Método: POST
URL: http://localhost:3000/addaccount

En la pestaña "Body", selecciona "raw" y elige JSON como formato.
Ingresa los datos de la cuenta en el cuerpo de la solicitud y haz clic en "Send" para agregar la cuenta.

3. Ruta para realizar una transferencia:
Método: POST
URL: http://localhost:3000/transfer

En la pestaña "Body", selecciona "raw" y elige JSON como formato.
Ingresa los detalles de la transferencia en el cuerpo de la solicitud y haz clic en "Send" para completar la transferencia.

4. Ruta para obtener información de una cuenta específica:
Método: GET
URL: http://localhost:3000/getaccount/123456 (reemplaza 123456 con el número de cuenta deseado)

Haz clic en "Send" para obtener la información de la cuenta especificada.

5. Ruta para obtener los últimos registros de una cuenta específica:
Método: GET
URL: http://localhost:3000/getlasts/123456 (reemplaza 123456 con el número de cuenta deseado)

Haz clic en "Send" para obtener los últimos registros de transferencias de la cuenta especificada.


## Licencia

Este proyecto está bajo la Licencia MIT - ve el archivo [LICENSE.md](LICENSE) para detalles

---

## Eric Arancibia (https://github.com/ericarancibia) - G68 Desarrollo Aplicaciones Full Stack JavaScript. Talento Digital - Academia Desafío Latam