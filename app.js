const express = require('express')
const app = express()

console.log('im on a node server, yo');

app.use(express.static('./public/'))

app.get('/', function (req, res) {
  res.sendFile('index.html')
})

app.listen(3000)