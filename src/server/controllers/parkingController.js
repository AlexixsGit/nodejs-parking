'use strict';

let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let ParkingService = require('../services/parkingService');
let RestResponse = require('../model/RestResponse');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', (req, res) => {

    if (!ParkingService.validateRequiredFields(req.body)) {
    }
    return res.status(200).jsonp(res.body);
})

module.exports = router;