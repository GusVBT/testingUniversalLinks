const express = require('express')

const app = express()
const http = require('http').Server(app)
const mime = require('mime')


app.get('/', (request, response, next) => {
    response.status(200).json('Universal Link server')
})

app.get('/apple-app-site-association', (request, response, next) => {
    response.setHeader('Content-Type', 'application/json')
    // response.sendFile(path.join(__dirname, './association', 'apple-app-site-association'));
    response.status(200).sendFile('/.well-known/apple-app-site-association', {root: __dirname})
    // response.status(200).json({
    //     applinks: {
    //       apps: [ ],
    //       details: [
    //         {
    //           appID: "H2MGR4798V.GusVBT.testingUniversalLinks",
    //           paths: [
    //             "*"
    //           ]
    //         }
    //       ]
    //     }
    //   })
})

app.use((err, request, response, next) => {
    response.status(400).json(err)
})

var port = process.env.PORT || 2000

http.listen(port)
console.log('listen in port =', port)