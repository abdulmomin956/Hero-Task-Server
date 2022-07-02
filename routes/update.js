const express = require('express');
const router = express.Router();
const updateController = require('../controllers/updateController');

router.patch('/:id', updateController.handleUpdate);

module.exports = router;