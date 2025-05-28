const express = require('express');
const router = express.Router();
const controller = require('../controllers/organizationController');
const auth = require('../middlewares/authMiddleware');

// All routes are now protected
router.post('/registerOrganization', auth, controller.registerOrganization);
router.get('/getOrganizations', auth, controller.getAllOrganizations);

module.exports = router;
