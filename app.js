// const argv = require('./config/yargs').argv

const {argv} = require('./config/yargs')
const colors = require('colors')

console.log(argv)
const { crearTabla, listarTabla  } = require('./multiplicar')

let comando = argv._[0]

switch(comando) {
    case 'listar': 
        listarTabla(argv.base, argv.limite)
        break
    
    case 'crear':
        crearTabla(argv.base, argv.limite)
            .then( res => console.log(res) )
            .catch( err => console.log(err) )
       
        break
       
    default :
        console.log('Comando no reconocido')    
}




