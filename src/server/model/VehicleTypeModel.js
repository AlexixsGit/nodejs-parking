'use strict';

let Entity = require("../model/Entity");
let mongoose = require("mongoose");

class VehicleTypeSchema extends Entity {
    structure() {
        this.structure();
        this.def(String, 'description');
    };
};

let vehicleTypeSchema = mongoose.Schema(VehicleTypeSchema, { collection: 'vehicle_type' });
module.exports = mongoose.model('vehicleType', vehicleTypeSchema);
