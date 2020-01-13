const express = require('express');
const router = express.Router();
const {
    makeService
} = require('../controllers/services_controller');

// CREATE
router.post('/', makeService);

module.exports = router;