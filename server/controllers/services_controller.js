const {
    addService,
    getAllServices,
    deleteService,
    // updateService
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

const getServices = function (req, res) {
    getAllServices(req).
    exec((err, services) => {
        if (err) {
            res.status(500);
            res.json({
                error: err.message
            });
        }
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

// const changeService = function (req, res) {
//     if (req.error) {
//         res.status(req.error.status);
//         res.send(req.error.message);
//     } else {
//         updateService(req).exec((err, post) => {
//             if (err) {
//                 res.status(500);
//                 res.json({
//                     error: err.message
//                 });
//             }
//             res.status(200);
//             res.send(post);
//         });
//     }
// };

module.exports = {
    makeService,
    getServices,
    // changeService,
    removeService
}