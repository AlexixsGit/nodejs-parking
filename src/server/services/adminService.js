'use strict';

let MongoRepository = require('../repositories/MongoRepository');
let AdminModel = require('../model/AdminModel');

class AdminService {

    static findAdminByVehicleType(vehicle) {        
        return MongoRepository.find(AdminModel, { vehicleType: vehicle.toString() });
    }
}

module.exports = AdminService;