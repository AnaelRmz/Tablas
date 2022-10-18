const fs = require('fs');
const colors = require('colors');

const crearArchivo = ( base = 5, listar = false, hasta = 10 ) => {

    return new Promise(( resolve, reject ) => {

        let salida = '';

    for ( let i = 1; i<=hasta; i++) {

        salida += ` ${base} x ${i} = ${base * i}\n`;
    } 

    if( listar ) {

        console.log('================================='.cyan);
        console.log(`Tabla del:`.green, base)
        console.log('================================='.cyan);
        console.log(salida);

    }


    fs.writeFileSync( `./salida/tabla-${base}.txt`, salida)

    resolve(`tabla-${base}.txt creado`);
    })
// console.log('=================================');
// console.log(`Tabla del:`, base)
// console.log('=================================');

//     let salida = '';

//     for ( let i = 1; i<=10; i++) {

//         salida += ` ${base} x ${i} = ${base * i}\n`;
//     }  

//     // console.log(salida);

// fs.writeFileSync( `tabla-${base}.txt`, salida)

// // console.log(`tabla-${base}.txt creado`);

}

module.exports = {
    crearArchivo
}