const express = require('express')

const app = express()
const http = require('http').Server(app)


app.get('/', (request, response, next) => {
    response.status(200).json('Universal Link server')
})

app.use((err, request, response, next) => {
    response.status(400).json(err)
})

http.listen(2000)
console.log('listen in port =', 2000)