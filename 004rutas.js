
const http = require('http');
const cursos = require('./cursos');

const PUERTO = 8081;

function solicitudGet(req, res) {
    const camino = req.url;

    res.statusCode = 200; // no necesario ...
    if (camino === '/') {
        res.end("Bienvenido a mi primer servidor API");
    }
    else if (camino === '/cursos') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(cursos.informando))
    }
    else if (camino === '/cursos/programacion') {
        res.end(JSON.stringify(cursos.informando.programacion))
    }
    else if (camino === '/cursos/matematicas') {
        res.end(JSON.stringify(cursos.informando.matematicas))
    }
    else {
        res.statusCode = 404;
        res.end('Elemento no encontrado ...');
    }
}

function solicitudPost(req, res) {
    const camino = req.url;

    res.statusCode = 200;
    if (camino === '/cursos') {
        let cuerpo = '';
        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });
        req.on('end', () => {
            console.log(cuerpo);
            cuerpo = JSON.parse(cuerpo);
            console.log(cuerpo.titulo);
            res.end("Has recibido una petición POST ....");
        });
        //res.end("Has recibido una petición POST ....");
    }
    else {
        res.statusCode = 400;
        res.end('Petición POST incorrecta ...');
    }
}

const servidor = http.createServer((req, res) => {

    const { method } = req; // variable method con valor req.method

    switch (method) {
        case 'GET':
            return solicitudGet(req, res);
        case 'POST':
            return solicitudPost(req, res);
        default:
            //console.log("Método no implementado ...");
            res.statusCode = 501;
            res.end("Método no implementado ...")
    }
}).listen(PUERTO, () => {
    console.log(`Server running at http://127.0.0.1:${PUERTO}`)
});
