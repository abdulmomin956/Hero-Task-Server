const express = require('express');
const router = express.Router();
const deleteController = require('../controllers/deleteController');

router.delete('/:id', deleteController.handleDelete);

module.exports = router;