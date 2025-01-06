const Product = require('../models/product.model');

//Get all products
const getproducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }

};

//Get one product
const getoneproduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
        }
    catch(error) {
        res.status(500).json({message: error.message});
    }
};

//Create a product
const createProduct = async (req,res) => {
   
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
        }
    catch(error) {
        res.status(500).json({message: error.message});
    }
       
};

//Update a product
const updateProduct =  async(req, res) => {
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
};

//Delete a product  
const deleteProduct = async(req,res) =>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id);

        if(!product){
            res.status(404).send({message: "Product not found"});
        }

        res.status(200).json({message: "Product Deleted successfully"});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }

};

module.exports = { 
    getproducts, 
    getoneproduct,
    createProduct,
    updateProduct,
    deleteProduct
};