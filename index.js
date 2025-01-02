const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    res.send("Hello from Node API");
});
 
//Read all products - GET Method

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Read a single product - GET Method with ID parameter

app.get('/api/product/:id',async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
        }
    catch(error) {
        res.status(500).json({message: error.message});
    }
})

//Create a product - POST Method

app.post('/api/products', async (req,res) => {
   
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
        }
    catch(error) {
        res.status(500).json({message: error.message});
    }
       
});


//Update a product - PUT Method 

app.put('/api/product/:id', async(req, res) => {
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);

    if(!product){
        res.status(404).send({message: "Product not found"});
    }

    const updatedproduct = await Product.findById(req.params.id);
    res.status(200).send(updatedproduct);

    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
})


//Connect to Mongodb

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

