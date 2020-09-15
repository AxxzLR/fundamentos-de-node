const { exec, spawn } = require('child_process')

// exec ejecuta acciones del sistema operativo, como en linea de comandos
// exec(instruccion<string>,callback( error, stdout, stderr )=>{} )
exec('ls -lat', (error, stdout, stderr) => {
    if (error) {
        console.error(err)
        return false
    }
    console.log(stdout)
})

exec('node conceptos/modulos/consola.js', (error, stdout, stderr) => {
    if (error) {
        console.error(err)
        return false
    }
    console.log(stdout)
})

let proceso = spawn('ls', ['-lat'])

console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data', dato=>{
    console.log('¿Esta muerto?')
    console.log(proceso.killed)
    console.log(dato.toString())
})

proceso.on('exit', ()=>{
    console.log('¿Esta muerto?')
    console.log(proceso.killed)
    console.log('El proceso termino')
})