const express = require('express')

const app = express()
const http = require('http').Server(app)

http.listen(2000)
console.log('listen in port =', 2000)