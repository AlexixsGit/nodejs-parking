'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let InvoiceSchema = new Schema({
    plaque: String,
    descVehicleType: String,
    engineCapacity: Number,
    employee: String,
    iva: Number,
    additionalCost: Number,
    subtotal: Number,
    total: Number
}, { collection: 'invoice' });

module.exports = mongoose.model('InvoiceModel', InvoiceSchema);