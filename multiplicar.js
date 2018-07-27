const fs = require('fs')
const colors = require('colors')

let crearTabla = (base, limite) => {

    return new Promise( (resolve,reject) => {

        if( !Number(base) ) {
            reject('Ha ocurrido un error')
            return;
        }

        let data = ''
        
        for(let i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base*i} \n`
        }

        fs.writeFile(`tablas/Tabla de Multiplicar ${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve (`Tabla del ${base}.txt`.rainbow)
        })
    })
}

let listarTabla = (base, limite) => {

    console.log(`======================`.green);
    console.log(`Tabla del ${base} al ${limite}`.green);
    console.log(`======================`.green);

    let data = ''

    for(let i = 1; i <= limite; i++){
        data += `${base} * ${i} = ${base*i} \n`
    }

    console.log(data)
}

module.exports = {
    crearTabla,
    listarTabla
}