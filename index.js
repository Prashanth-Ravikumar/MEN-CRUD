const express = require('express');
const mongoose = require('mongoose');
const ProductRoutes = require('./routes/product.route.js');
require('dotenv').config();
const app = express();

//Middleware 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.use('/api/products', ProductRoutes);


//Connecting to Mongodb
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected!');
    app.listen(3000, () => {
        console.log("Port is running at 3000");
    });
})
.catch((error) =>{
    console.log("connection failed!", error);
});
