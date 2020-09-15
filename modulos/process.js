// const process = require('process')

process.on('beforeExit', () => {
    console.log('El va a acabar')
})
process.on('exit', () => {
    console.log('El proceso acabo')
})
process.on('uncaughtException', (err, origen) => {
    console.error('Vaya, se nos ha olvidado capturar un error', err)
})

FuncionNoExiste()

console.log('Hey')