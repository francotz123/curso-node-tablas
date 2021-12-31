const fs = require('fs');

const crearArchivoTabla = async( base = 5, listar, hasta = 10 ) => {

    try {
        console.clear();

        let salida = ''; 
        let consola = ''; 

        for(i=1;i<=hasta;i++){
            consola +=`${base} * ${i} = ${base*i}\n` ;
            salida +=`${base}`+` *`.blue+` ${i}`+` =`.green+` ${base*i}\n` ;
        }

        if( listar ) console.log( salida );
        
        fs.writeFileSync( `./salida/tabla-${base}.txt`, consola );
    
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivoTabla
};