const Service = require('../models/service');

const addService = function (req) {
    return new Service(req.body)
};

module.exports = {
    addService
}