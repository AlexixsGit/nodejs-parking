'use strict';

let Entity = require("../model/Entity");
let mongoose = require("mongoose");
let Schema = mongoose.Schema;


let VehicleTypeSchema = new Schema({
    description: String
}, { collection: 'vehicle_type' });

module.exports = mongoose.model('VehicleTypeModel', VehicleTypeSchema);
