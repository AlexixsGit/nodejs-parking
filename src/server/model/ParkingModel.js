'use strict';

let Entity = require('../model/Entity');
let mongoose = require('mongoose');

class ParkingSchema extends Entity {
    structure() {
        this.structure();
        this.def(Number, 'vehicle_type');
        this.def(String, 'plaque');
        this.def(Date, 'entry_date');
        this.def(String, 'entry_hour');
        this.def(Date, 'departure_date');
        this.def(String, 'departure_hour');
        this.def(Number, 'engine_capacity');
    }
}

let parkingSchema = mongoose.Schema(ParkingSchema, { collection: 'parking' });
module.exports = mongoose.model('parking', parkingSchema);