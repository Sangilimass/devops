const express = require('express');
const router = express.Router();
const downloadController = require('../controllers/downloadController');

router.post('/process', downloadController.processDownload);

module.exports = router;