'use strict';

let MongoRepository = require('../repositories/MongoRepository');
let AdminService = require('../services/adminService');
let ParkingModel = require('../model/ParkingModel');


class ParkingService {

    static enterVehicle() {

    }

    /**
     * Valida campos obligatorios
     */
    static validateRequiredFields(model) {
        let isValid = true;

        if (model.plaque == '') {
            isValid = false;
        }
        if (model.vehicleType == '') {
            isValid = false;
        }
        return isValid;
    }

    /**
     * Validate the available capacity of the parking lot
     * @param {Model} model 
     */
    static validateCapacity(model) {
        AdminService.findAdminByVehicleType(model.vehicleType).then(admin => {
            this.countParkingWithoutDepartureDate().then(quantity => {
                let capacity = admin[0].capacity;
                return quantity <= capacity;
            });
        });
    }

    static countParkingWithoutDepartureDate() {
        return MongoRepository.count(ParkingModel, { departureDate: null });
    }
}

module.exports = ParkingService;