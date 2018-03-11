'use strict';

let Entity = require('../model/Entity');
let mongoose = require('mongoose');

class InvoiceSchema extends Entity {
    structure() {
        this.structure();
        this.def(String, 'plaque');
        this.def(String, 'desc_vehicle_type');
        this.def(Number, 'engine_capacity');
        this.def(String, 'employee');
        this.def(Number, 'iva');
        this.def(Number, 'additional_cost');
        this.def(Number, 'subtotal');
        this.def(Number, 'total');
    }
}

let invoiceSchema = mongoose.Schema(InvoiceSchema, { collection: 'invoice' });
module.exports = mongoose.model('invoice', invoiceSchema);