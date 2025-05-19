var http = require('http');

const PUERTO = 8081;
var enviados = 0;

/*
http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World');
}).listen(PUERTO);
*/

const servidor = http.createServer((req, res) => {
    solicitudes(req, res);
    /*
    console.log(' ===> req(solicitud)');
    console.log('Petición URL: ');
    console.log(req.url);
    console.log('Petición Método: ');
    console.log(req.method);
    console.log('Petición Cabeceras: ');
    console.log(req.headers);

    console.log(' ===> res(respuesta)');
    res.setHeader('content-type', 'application/json');
    console.log('Respuesta Cabeceras:');
    console.log(res.getHeaders());
    console.log('Respuesta Código Salida:');
    console.log(res.statusCode);
    //res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hola pibes (${enviados += 1})!!`); // Muestra la respuesta
    */
}).listen(PUERTO, () => {
    console.log(`Server running at http://127.0.0.1:${PUERTO}`)
});
