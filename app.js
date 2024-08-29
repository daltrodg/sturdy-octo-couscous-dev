const express = require('express')
const app = express()

console.log('im on a node server, yo');

app.use(express.static('./public/'))

app.get('/', function (req, res) {
  res.sendFile('index.html')
})

app.get('/ejs', (req, res)=>{

  res.render('index', {
    myServerVarible : "something from server"
  });

   //can you get content from client...to console?
})

app.listen(3000)