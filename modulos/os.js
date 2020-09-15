const os = require('os')

//Devuelve la arquitectura del equipo
console.log(os.arch())
//Devuelve la informacion de la plataforma que esta corriendo el codigo
console.log(os.platform())
//Devuelve la informacion de los CPUS
console.log(os.cpus())
//Devuelve los errores del sistema
console.log(os.constants)
//Devuelve en bytes la memoria libre que se tiene o la total
const SIZE = 1024
const kb =(bytes) => bytes/SIZE
const mb =(bytes) => kb(bytes)/SIZE
const gb =(bytes) => mb(bytes)/SIZE

console.log(os.freemem())
console.log(kb(os.freemem()))
console.log(mb(os.freemem()))
console.log(gb(os.freemem()))

console.log(os.totalmem())
console.log(kb(os.totalmem()))
console.log(mb(os.totalmem()))
console.log(gb(os.totalmem()))

console.log(os.homedir())
console.log(os.tmpdir())
console.log(os.hostname())
console.log(os.networkInterfaces())