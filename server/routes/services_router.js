const express = require('express');
const router = express.Router();
const {
    getService,
    getServices,
    makeService,
    removeService,
    changeService
} = require('../controllers/services_controller');

// Read one service 
router.get('/:id', getService)

// Read all services
router.get('/', getServices);

// Create a service 
router.post('/', makeService);

// Delete a service
router.delete('/:id', removeService);

// Change a service 
router.put('/:id',changeService);

module.exports = router;