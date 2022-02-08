const express = require('express');
const router = express.Router();

const logTypeController = require('../controllers/LogTypeController');


router.post('/store', logTypeController.store);

module.exports = router;