const express = require('express');
const router = express.Router();
const controller = require('../controllers/beneficiaryController');

router.post('/registerBeneficially', controller.registerBeneficiary);
router.post('/registerSponsorship', controller.registerSponsorship);
router.post('/getBeneficially/:id', controller.getBeneficiaryById);
router.get('/getBeneficialies', controller.getAllBeneficiaries);
router.get('/getBeneficiaryStatus', controller.getSponsorships);
router.patch('/updateBeneficialyStatus/:id', controller.updateStatus); 

module.exports = router;
