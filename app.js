require('dotenv').config()
const express = require('express')
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://Dalton:${process.env.MONGO_URI}@cluster0.sv1mi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`; 

app.set('view engine', 'ejs')
app.use(express.static('./public/'))

console.log(uri);

console.log('im on a node server change that and that tanad f, yo');

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

// function whateverNameOfIt (params) {}
// ()=>{}

app.get('/read', async (req,res)=>{

  console.log('in /read');
  await client.connect();
  
  console.log('connected?');
  // Send a ping to confirm a successful connection
  
  let result = await client.db("daltons-db").collection("junkstuff-collection")
    .find({}).toArray(); 
  console.log(result); 

  res.render('mongo', {
    mongoResult : result
  });

})


app.get('/', function (req, res) {
  // res.send('Hello Node from Ex on local dev box')
  res.sendFile('index.html');
})

app.get('/ejs', (req,res)=>{
``
  res.render('index', {
    myServerVariable : "something from server"
  });

  //can you get content from client...to console? 
})

app.get('/insert', async (req,res)=> {

  //connect to db 
  console.log('in /insert');
  await client.connect();
  //point to the connection
  console.log('connected?');
  // Send a ping to confirm a successful connection
  
  let result = await client.db("daltons-db").collection("junkstuff-collection")
    .insertOne({ post: 'hardcoded post insert' }); 
  console.log(result);
  //insert into it 
  res.render('insert');

});

app.post('/update', async (req,res)=> {

  //connect to db 
  console.log('in /update');
  await client.connect();
  //point to the connection
  console.log('connected?');
  // Send a ping to confirm a successful connection
  
  let result = await client.db("daltons-db").collection("junkstuff-collection")
    .findOneandUpdate(
      { 'post' : 'hardcoded post insert' }
      //{ 'post' : ''}
    ); 
  console.log(result);
  //insert into it 
  res.render('insert');

});

app.listen(5000)
