const colors = require('colors');
const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

crearArchivoTabla( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, 'SE CREO EL ARCHIVO '.rainbow))
    .catch( err => console.log(err));


// const [, , arg3 = 'base=5' ] = process.argv
// const [, base = 5] = arg3.split('=');
