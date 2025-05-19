// let url = require('url'); No necesario, pues url es accesible globalmente

// o --> import miUrl from 'url';

const miUrl = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

console.log("Nombre del Host:");
console.log(miUrl.hostname);
console.log("Nombre del Camino:");
console.log(miUrl.pathname);
console.log("Parámetros de Búsqueda:");
console.log(miUrl.searchParams);
let miArray = miUrl.searchParams.entries();
console.log(miArray);
for (const elemento of miArray) {
    console.log(`Clave: ${elemento[0]}, Valor: ${elemento[1]}.`);
}
