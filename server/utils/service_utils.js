const Service = require('../models/service');

const addService = function (req) {
    return new Service(req.body)
};

const getAllServices = function (req) {
    return Service.find();
};

const deleteService = function (id) {
    return Service.findByIdAndRemove(id);
};

const updateService = function (req) {
    return Service.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
};


module.exports = {
    addService,
    getAllServices,
    deleteService,
    updateService
}