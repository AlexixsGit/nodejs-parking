'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ParkingSchema = new Schema({
    vehicleType: Number,
    plaque: String,
    entryDate: Date,
    entryHour: String,
    departureDate: Date,
    departureHour: String,
    engineCapacity: Number
}, { collection: 'parking' });

module.exports = mongoose.model('ParkingModel', ParkingSchema);