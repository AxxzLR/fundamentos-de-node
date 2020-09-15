let suma = 0
console.time('todo')
console.time('for')
for (let i = 0; i < 1000000000; i++) {
    suma++
}
console.timeEnd('for')

console.time('for2')
for (let i = 0; i < 1000000; i++) {
    suma++
}
console.timeEnd('for2')

console.time('async')
asyncrone()
    .then(() => {
        console.timeEnd('async')
    })

console.timeEnd('todo')

function asyncrone() {
    return new Promise((resolve, reject) => {
        console.log('Termina el proceso asyncrono')
        resolve()
    })
}