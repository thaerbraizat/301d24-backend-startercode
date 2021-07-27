'use strict';
const axios=require('axios');
const coffeeModel=require('../models/coffee.model');

// Endpoint for testing
const home=(req,res)=>{
res.send("WORKING!!!")
}
// Call the coffee api here and return the results
const retreiveItemsController=(req,res)=>{

    const url ="https://coffeepedias.herokuapp.com/coffee-list/"
    axios.get(url).then(data =>{
      console.log(data);
        const req =data.map(drink =>{
            return new coffeeModel(url)
        })
        res.send(req)
    }).catch
};
// Get favorite coffee from MongoDB
const getFavoriteCoffee=(req,res)=>{
    // provide your logic here
}
// Create new fav coffee endpoint
const createItemController=(req,res)=>{
    // provide logic here
};

// update coffee from MongoDB
const updateItemController=(req,res)=>{
    // provide logic here
};

// delete coffee from MongoDB
const deleteItemController=(req,res)=>{
    // provide your logic here
};

module.exports={
    home,
    getFavoriteCoffee,
    createItemController,
    updateItemController,
    deleteItemController,
    retreiveItemsController
};