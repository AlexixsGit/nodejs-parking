'use strict';

const express = require('express');
const AdminController = express();
const MongoRepository = require('../repositories/MongoRepository')
const AdminModel = require('../model/AdminModel');


AdminController.get('/getAdminList', (req, res) => {
    MongoRepository.find(AdminModel, {}).then(result => {
        res.send(result);
    });
})

module.exports = AdminController;