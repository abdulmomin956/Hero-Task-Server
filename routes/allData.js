const express = require('express');
const router = express.Router();
const allTaskController = require('../controllers/allTaskController');

router.get('/', allTaskController.handleGetData);

module.exports = router;