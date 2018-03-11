'use strict';

let Entity = require('../model/Entity');
let mongoose = require('mongoose');

class SaleSchema extends Entity {
    structure() {
        this.structure();
        this.def(Date, 'entry_date');
        this.def(Date, 'departure_date');
        this.def(Number, 'total_time');
        this.def(Number, 'invoice');
    }
}
let saleSchema = mongoose.Schema(SaleSchema, { collection: 'sale' });
module.exports = mongoose.model('sale', saleSchema);