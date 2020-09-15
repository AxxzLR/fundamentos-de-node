const { callbackify } = require("util");
const { error } = require("console");

function asincrona(callback) {
    //
    setTimeout(() => {
        try {
            let a = 3 + z
            callback(null, a)
        } catch (error) {
            callback(error)
        }
    }, 1000);
}


asincrona((err, data) => {
    if (err) {
        console.error(err)
        // return false
    }
    else
        console.log('Todo Ok', data)
})

//Esto no funciona
// try {
//     asincrona((err, data) => {
//         if (err)
//             throw err
//         console.log('Todo Ok', data)
//     })
// } catch (error) {
//     console.log('ha habido un error')
//     console.error(error)
// }

