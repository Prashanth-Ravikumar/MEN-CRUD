const express =  require('express');
const Product = require('../models/product.model'); 
const router = express.Router();
const {getproducts, getoneproduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller');
    

router.get('/', getproducts);  //getproducts is a function in product.controller.js
router.get('/:id', getoneproduct); //getoneproduct is a function in product.controller.js
router.post('/', createProduct);    //createProduct is a function in product.controller.js
router.put('/:id', updateProduct);  //updateProduct is a function in product.controller.js
router.delete('/:id', deleteProduct); //deleteProduct is a function in product.controller.js


module.exports = router;