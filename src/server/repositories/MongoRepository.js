'use strict';

let AdminModel = require("../model/AdminModel");
let PriceModel = require("../model/PriceModel");


//Mongo client
let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/parking");

class MongoRepository {

    static findOne(model, query) {
        return new Promise((resolve, reject) => {
            model.find(query).then((doc) => {
                resolve(doc);
            }).catch(reject);
        });
    };
}

MongoRepository.findOne(PriceModel, { high_engine_price: 2000 }).then(result => {
    console.log(result);
})
