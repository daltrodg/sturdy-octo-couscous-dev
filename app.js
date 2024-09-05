require('dotenv').config('express')
const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('./public/'))


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;

console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get('/mongo', async (req, res)=>{
  console.log('in /mongo');
  await client.connect();
  console.log("connected!");
    // Send a ping to confirm a successful connection
    let result = await client.db("daltons-db").collection("junkstuff-collection").find({}).toArray();
    console.log(result);

    res.render('mongo', {
      mongoResult : result[0]
    });
})

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