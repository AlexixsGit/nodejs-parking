'use strict';

let MongoRepository = require('../repositories/MongoRepository');



class ParkingService {

    static enterVehicle() {

    }

    /**
     * Valida campos obligatorios
     */
    static validateRequiredFields(model) {
        let isValid = true;

        if (model.plaque === '') {
            isValid = false;
        }

        return isValid;
    }
}

module.exports = ParkingService;