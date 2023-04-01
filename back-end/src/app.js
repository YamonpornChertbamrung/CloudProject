const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://tourdb:1234@cluster0.tvfr6n3.mongodb.net/test";

app.get('/tour', async (req, res) => {
    const client = new MongoClient(uri);
    await client.connect();
    const users = await client.db('PaaPai').collection('myTour').find({}).toArray();
    await client.close();
    res.status(200).send(users);
})


app.listen(process.env.PORT || 8081)