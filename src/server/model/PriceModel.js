'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PriceSchema = new Schema({
    vehicleType: Number,
    hourPrice: Number,
    dayPrice: Number,
    highEnginePrice: Number
}, { collection: 'price' });

module.exports = mongoose.model('PriceModel', PriceSchema);