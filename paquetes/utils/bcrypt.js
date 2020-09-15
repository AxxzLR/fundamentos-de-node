const bcrypt = require('bcrypt')

const pass = '12345Segura!2'

bcrypt.hash(pass, 5, (err, hash) => {
    console.log(hash)

    bcrypt.compare(pass, hash, (err, res) => {
        console.log(err)
        console.log(res)
    })
})