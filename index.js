const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    res.send("Hello from Node API");
});

app.post('/api/products', async (req,res) => {
   
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
        }
    catch(error) {
        res.status(400).json({message: error.message});
    }
       
});


mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => {
    console.log('Connected!');
    app.listen(3000, () => {
        console.log("Port is running at 3000");
    });
})
.catch(() =>{
    console.log("connection failed!")
});

