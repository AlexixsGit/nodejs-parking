'use strict';

let MongoRepository = require('../repositories/MongoRepository');
let VehicleTypeModel = require('../model/VehicleTypeModel');

let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    MongoRepository.connect();
    MongoRepository.find(VehicleTypeModel, {}).then(result => {
        res.send(result);
    })
});

module.exports = router;

