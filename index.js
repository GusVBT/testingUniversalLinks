const express = require('express')

const app = express()
const http = require('http').Server(app)


app.get('/', (request, response, next) => {
    response.status(200).json('Universal Link server')
})

app.use((err, request, response, next) => {
    response.status(400).json(err)
})

var port = process.env.PORT || 2000

http.listen(port)
console.log('listen in port =', port)