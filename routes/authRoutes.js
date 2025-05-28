

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// No auth middleware here — login must be public
router.post('/login', authController.login);

module.exports = router;
