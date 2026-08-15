// Rutas separadas para cumplir estructura modular
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// 2 rutas publicas pedidas
router.get('/', mainController.home);
router.get('/status', mainController.status);

module.exports = router;
