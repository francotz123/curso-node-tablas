const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        describe: 'base para la multiplicación',
        type: 'number'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'Si listar está en true, lista la tabla'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Numero que indica hasta donde debe ir el numero'
    })
    .check((argv, option ) =>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número'
        }
        // if(isNaN(argv.h)){
        //     throw 'Hasta tiene que ser un número'
        // }
        return true;
    })
    .argv

module.exports = argv;