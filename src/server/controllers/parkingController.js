'use strict';

let MongoRepository = require('../repositories/MongoRepository');
let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', (req, res) => {

    if (req.body.name === '') {
        res.send('Name is not valid');
    } else {
        res.send(req.body);
    }

})

module.exports = router;