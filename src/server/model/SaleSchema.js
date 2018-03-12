'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SaleSchema = new Schema({
    entryDate: Date,
    departureDate: Date,
    totalTime: Number,
    invoice: Number
}, { collection: 'sale' });

module.exports = mongoose.model('SaleSchema', SaleSchema);