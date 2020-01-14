const Service = require('../models/service');

const addService = function (req) {
    return new Service(req.body)
};

const getAllServices = function (req) {
    return Service.find();
};

const getAService = function(req) {
    // console.log(req.params)
    return Service.findById(req.params.id)
}

const deleteService = function (id) {
    return Service.findByIdAndRemove(id);
};

const updateService = function (req) {
    // console.log(req.params)
    return Service.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
};

module.exports = {
    addService,
    getAllServices,
    getAService,
    deleteService,
    updateService
}