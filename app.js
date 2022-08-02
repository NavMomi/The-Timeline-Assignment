const express = require('express');
const router = require('./routes/main');

const app = express();

app.use(express.urlencoded({extended: false}))


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

// bring router
app.use(router);
const moongoose=require("mongoose");


app.listen('8888', () => {
    console.log('server is running on port 8888')
})
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://nav:navjot1990@cluster0.im2rx.mongodb.net/?retryWrites=true&w=majority')
        .then( () => {
            console.log('DB is connected')
        })
        .catch( err => {
            console.log(err)
        })