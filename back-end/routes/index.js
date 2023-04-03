const express = require("express");

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://tourdb:1234@cluster0.tvfr6n3.mongodb.net/test";


router = express.Router();
router.get('/tour', async (req, res) => {
    try {
    const client = new MongoClient(uri);
    await client.connect();
    const users = await client.db('PaaPai').collection('myTour').find({}).toArray();
    await client.close();
    return res.json(users);
    // return ;
    // res.status(200).send(users)
    }

   catch (err) {
    return res.status(500).json(err)
  }
})


exports.router = router;