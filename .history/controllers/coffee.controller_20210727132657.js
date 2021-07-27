'use strict';
const axios = require('axios');
const coffeeModel = require('../models/coffee.model');

// Endpoint for testing
const home = (req, res) => {
    res.send("WORKING!!!")
}
// Call the coffee api here and return the results
const retreiveItemsController = (req, res) => {

    const url = "https://coffeepedias.herokuapp.com/coffee-list/"
    axios.get(url).then(data => {
        console.log(data.data);

        const reqData = data.data.map(drink => {
            return new coffeeModel(drink)
        })
        res.send(reqData)
    }).catch(err => {
        res.send(err)
    })
};
// Get favorite coffee from MongoDB
const getFavoriteCoffee = (req, res) => {
    coffeeModel.find({}, (error, data) => {
        res.send(data)
    })
}
// Create new fav coffee endpoint
const createItemController = (req, res) => {
    const {
        title,
        ingredients,
        image_url,
        id,
    } = req.body;
    coffeeModel.find({ id: id }, (err, data) => {
        if (data.length>0) {
            res.send("cant save")
        } else {
            let newData = new coffeeModel({
                title: title,
                ingredients: ingredients,
                image_url: image_url,
                id: id
            })
            newData.save();
            res.send("item Added")
        }
    })

};

// update coffee from MongoDB
const updateItemController = (req, res) => {
    const {
        title,
        description,
        ingredients,
        image_url,
    } = req.body;
    const id = req.params.id;
    coffeeModel.find({id:id}, (error, data) => {
        if(error){
            res.send(err);
        }else{

            data[0].title=title,
            data[0].description=description,
            data[0].ingredients=ingredients,
            data[0].image_url=image_url,
            data[0].save();
            res.send(data)
        }
    })

};

// delete coffee from MongoDB
const deleteItemController = (req, res) => {
   const id = req.params.id;
   coffeeModel.deleteOne({id:id},(error,data)=>{
       if(error){
           res.send(error)
       }else {
        coffeeModel.find({}, (error, data) => {
            res.send(data)
        })
       }
   })
};

module.exports = {
    home,
    getFavoriteCoffee,
    createItemController,
    updateItemController,
    deleteItemController,
    retreiveItemsController
};