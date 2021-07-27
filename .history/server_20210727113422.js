'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
app.use(express.json());
app.use(cors());
const axios = require('axios');

const port = process.env.PORT;
const {
    home,
    getFavoriteCoffee,
    createItemController,
    updateItemController,
    deleteItemController,
    // retreiveItemController
} = require('./controllers/coffee.controller');

mongoose.connect(`mongodb://127.0.0.1:27017/finalexam`,
    { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', home);
app.get('/fav-list', (req, res) => {

    const url = "https://coffeepedias.herokuapp.com/coffee-list/"
    axios.get(url).then(data => {
        res.send(data);
        console.log(data);


    }));
    
// app.get('/retreive',retreiveItemController);
app.post('/create', createItemController);
app.put('/update/:id', updateItemController);
app.delete('/delete/:id', deleteItemController);

app.listen(port, () => {
    console.log('listening to port 8000');
});