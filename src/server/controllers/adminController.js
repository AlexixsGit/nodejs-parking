'use strict';

const express = require('express');
const router = express();
const MongoRepository = require('../repositories/MongoRepository')
const AdminModel = require('../model/AdminModel');


router.get('/', (req, res) => {
    MongoRepository.find(AdminModel, {}).then(result => {
        res.send(result);
    });
})

module.exports = router;