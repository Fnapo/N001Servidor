
const http = require('http');

const PUERTO = 8081;
let enviados = 0;

const servidor = http.createServer((req, res) => {
    //res.writeHead(200, { 'Content-Type': 'text/plain' });
    //res.end(`Hola pibes (${enviados += 1})!!`); // Muestra la respuesta
}).listen(PUERTO, () => {
    console.log(`Hola pibes!!`);
    console.log(`Server running at http://127.0.0.1:${PUERTO}`);
});
