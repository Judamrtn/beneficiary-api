
const express = require('express');
const router = express.Router();
const controller = require('../controllers/beneficiaryController');
const auth = require('../middlewares/authMiddleware');

// All routes are now protected
router.post('/registerBeneficiary', auth, controller.registerBeneficiary);
router.post('/registerSponsorship', auth, controller.registerSponsorship);
router.get('/getBeneficiary/:id', auth, controller.getBeneficiaryById);
router.get('/getBeneficiaries', auth, controller.getAllBeneficiaries);
router.get('/getBeneficiaryStatus', auth, controller.getSponsorships);
router.patch('/updateBeneficiaryStatus/:id', auth, controller.updateStatus);

module.exports = router;
