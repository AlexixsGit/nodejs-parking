'use strict';

let Entity = require("../model/Entity");
let mongoose = require('mongoose');

class AdminSchema extends Entity {
    structure() {
        super.structure();
        this.def(Number, 'hoursForADay');
        this.def(Number, 'capacity');
        this.def(Number, 'vehicleType');
        this.def(String, 'restrictPlaqueLetter');
    }
}
let adminSchema = mongoose.Schema(AdminSchema, { collection: 'admin' });
module.exports = mongoose.model('admin', adminSchema);