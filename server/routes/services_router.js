const express = require('express');
const router = express.Router();
const {
    makeService,
    getServices
    // ,
    // removeService,
    // changeService
} = require('../controllers/services_controller');

// READ
router.get('/', getServices);

// CREATE
router.post('/', makeService);

// // DELETE
// router.delete('/:id', removeService);

// // UPDATE
// router.put('/:id',changeService);


module.exports = router;