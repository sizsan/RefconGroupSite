const {
    addService,
    getAllServices,
    getAService,
    deleteService,
    updateService
} = require('../utils/service_utils');

const makeService = function (req, res) {
    addService(req).save((err, post) => {
        if (err) {
            res.status(500);
            res.json({
                error: err.message
            });
        }
        res.status(201);
        res.send(post);
    });
};

const getService = function(req, res) {
    getAService(req).
    exec((err, service) => {
        if (err) {
            res.status(500);
            res.json({
                error:err.message
            });
        }
        res.send(service);
    })
}

const getServices = function (req, res) {
    getAllServices(req).
    exec((err, services) => {
        if (err) {
            res.status(500);
            res.json({
                error: err.message
            });
        }
        // console.log(res)
        res.send(services);
    });
};

const removeService = function (req, res) {
    if (req.error) {
        res.status(req.error.status);
        res.send(req.error.message);
    } else {
        deleteService(req.params.id).exec((err) => {
            if (err) {
                res.status(500);
                res.json({
                    error: err.message
                });
            }
            res.sendStatus(204);
        });
    }
};

const changeService = function (req, res) {
    if (req.error) {
        res.status(req.error.status);
        res.send(req.error.message);
    } else {
        updateService(req).exec((err, service) => {
            if (err) {
                res.status(500);
                res.json({
                    error: err.message
                });
            }
            // console.log(res)
            res.status(200);
            res.send(service);
        });
    }
};

module.exports = {
    makeService,
    getServices,
    getService,
    changeService,
    removeService
}