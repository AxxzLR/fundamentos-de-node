console.log('log')
console.warn('Alert')
console.error('Error')
console.info('info')

const tabla = [
    { a: 1, b: 'z' }, { a: 4, b: 7 }
]
console.table(tabla)

console.group('First for')
for (let i = 0; i < 3; i++) {
    console.log(`i = ${i}`)
    console.group('Second For')
    for (let j = 0; j < 3; j++) {
        console.log(`j = ${j}`)
    }
    console.groupEnd('Second For')
}
console.groupEnd('First for')


console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')
console.count('veces')

console.time('inicio')
setTimeout(()=>console.timeEnd('inicio'), 5305)