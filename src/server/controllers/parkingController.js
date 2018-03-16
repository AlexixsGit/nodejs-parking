'use strict';

let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let ParkingService = require('../services/parkingService');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', (req, res) => {
    let model = req.body;

    if (!ParkingService.validateRequiredFields(model)) {
        return res.sendStatus(403);
    }
    if (!ParkingService.validateCapacity(model)) {
        console.log("Cupo no disponible");
        return res.sendStatus(403);
    }
    return res.status(200).jsonp(model);
})

module.exports = router;