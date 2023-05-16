const express = require("express");
const cors = require("cors");
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

//Mongodb

const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_PAss}@cluster0.6rkaped.mongodb.net/?retryWrites=true&w=majority`;

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
        // await client.close();
    }
}
run().catch(console.dir);



//Basic server and port
app.get("/", (req, res) => {
    res.send("Car doctor is comming")
})

app.listen(port, (req, res) => {
    console.log(`Car doctor server is running on port: ${port}`);
})