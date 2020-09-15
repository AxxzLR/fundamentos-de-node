const http = require('http')
const PORT = 3000
const route = (req, res) => {
    console.log('Nueva petición!')
    console.log(req.url)

    res.writeHead(201, { 'Content-Type': 'text/html' })
    switch (req.url) {
        case '/hola':
            res.write('<h1>Hola que tal</h1>')
            res.end()
            break
        default:
            res.write('<h1>404</h1>')
            res.end()
            break
    }

    // res.writeHead(201, { 'Content-Type': 'text/html' })

    // res.write('<h1>Hola ya se usar HTTP de NodeJS</h1>')

    // res.end()
}
http.createServer(route).listen(PORT)

console.log(`Escuchando http en el puerto ${PORT}`)