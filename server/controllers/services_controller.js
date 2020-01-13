const {
    addService
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

module.exports = {
    makeService
}