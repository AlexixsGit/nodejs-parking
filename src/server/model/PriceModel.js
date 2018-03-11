'use strict';

let Entity = require("../model/Entity")
let mongoose = require('mongoose');

class PriceSchema extends Entity {
    structure() {
        this.structure();
        this.def(Number, 'vehicle_type');
        this.def(Number, 'hour_price');
        this.def(Number, 'day_price');
        this.def(Number, 'high_engine_price');
    }
}
let priceSchema = mongoose.Schema(PriceSchema, { collection: 'price' });
module.exports = mongoose.model('price', priceSchema);