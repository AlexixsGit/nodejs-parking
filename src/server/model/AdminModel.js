'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AdminSchema = new Schema({
    hoursForADay: Number,
    capacity: Number,
    vehicleType: Number,
    restrictPlaqueLetter: String
}, { collection: 'admin' });

module.exports = mongoose.model('AdminModel', AdminSchema);