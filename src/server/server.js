'use strict';

//Libs
const express = require('express');
const app = express();
const vehicleTypeController = require('../server/controllers/vehicleTypeController');

app.use('/vehicleTypeList', vehicleTypeController);

function init() {
    let server = app.listen(8181, () => {
        let host = server.address().address;
        let port = server.address().port;
        console.log("App listening at http://%s:%s", host, port);
    });

}
init();