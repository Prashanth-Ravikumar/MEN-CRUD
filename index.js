const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.listen(3000, () => {
    console.log("Port is running at 3000");
});

app.get('/', (req, res) => {
    res.send("Hello from Node API Server");
});

mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => {
    console.log('Connected!');
})
.catch(() =>{
    console.log("connection failed!")
});

