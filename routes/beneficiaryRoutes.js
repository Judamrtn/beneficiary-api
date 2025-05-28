const express = require('express');
const router = express.Router();
const controller = require('../controllers/beneficiaryController');
const auth = require('../middlewares/authMiddleware');

router.post('/registerBeneficially', controller.registerBeneficiary);
router.post('/registerSponsorship', auth, controller.registerSponsorship); // 🔒 Protected
router.post('/getBeneficially/:id', controller.getBeneficiaryById);
router.get('/getBeneficialies', controller.getAllBeneficiaries);
router.get('/getBeneficiaryStatus', controller.getSponsorships);
router.patch('/updateBeneficialyStatus/:id', auth, controller.updateStatus); // 🔒 Protected

module.exports = router;
