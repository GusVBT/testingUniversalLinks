const express = require('express')

const app = express()
const http = require('http').Server(app)

app.get('/', (request, response, next) => {
    response.status(200).json('Gus Universal Link server')
})

app.get('/redirect', (request, response, next) => {
    
    var userAgent = request.headers['user-agent']
    
    var isIOs = /iPad|iPhone|iPod/.test(userAgent) //&& !window.MSStream --take a look on that later.
    
    if (isIOs) {
        response.redirect('https://itunes.apple.com/us/app/youtube-watch-listen-stream/id544007664?mt=8')
        return
    } else {
        response.redirect('https://play.google.com/store/apps/details?id=com.google.android.youtube&hl=en')
        return
    }
})

app.get('/gus', (request, response, next) => {
    response.status(200).json('eae')
})

app.get('/apple-app-site-association', (request, response, next) => {

    response.setHeader('Content-Type', 'application/json')
    response.status(200).sendFile('/.well-known/apple-app-site-association', { root: __dirname })
})

app.use((err, request, response, next) => {
    response.status(400).json(err)
})

var port = process.env.PORT || 2000

http.listen(port)
console.log('listen in port =', port)