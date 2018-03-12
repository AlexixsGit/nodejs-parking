'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

class PriceSchema extends Entity {
    structure() {
        this.structure();
        this.def(Number, 'vehicle_type');
        this.def(Number, 'hour_price');
        this.def(Number, 'day_price');
        this.def(Number, 'high_engine_price');
    }
}

let PriceSchema = new Schema({
    vehicleType: Number,
    hourPrice: Number,
    dayPrice: Number,
    highEnginePrice: Number
}, { collection: 'price' });

module.exports = mongoose.model('PriceModel', PriceSchema);