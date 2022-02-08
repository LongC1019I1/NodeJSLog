const express = require('express');
const router = express.Router();

const logController = require('../controllers/LogController');


router.post('/store', logController.store);

module.exports = router;