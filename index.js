const express = require('express')

const app = express()
const http = require('http').Server(app)
const mime = require('mime')


app.get('/', (request, response, next) => {
    console.log('#')
    console.log(getMobileOperatingSystem())
    if (getMobileOperatingSystem() === "ios-link") {
        response.redirect('https://itunes.apple.com/us/app/youtube-watch-listen-stream/id544007664?mt=8')
    } else {
        response.redirect('https://play.google.com/store/apps/details?id=com.google.android.youtube&hl=en')
    }

    // response.status(200).json('Universal Link server')
})

// function changeLink(){
//     document.getElementById('link').href= getMobileOperatingSystem();
// }



app.get('/apple-app-site-association', (request, response, next) => {

    response.setHeader('Content-Type', 'application/json')
    response.status(200).sendFile('/.well-known/apple-app-site-association', { root: __dirname })
})

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
        // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
          return "Windows Phone";
      }
  
      if (/android/i.test(userAgent)) {
          return "Android";
      }
  
      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return "iOS";
      }
  
      return "unknown";
}

app.use((err, request, response, next) => {
    response.status(400).json(err)
})

var port = process.env.PORT || 2000

http.listen(port)
console.log('listen in port =', port)