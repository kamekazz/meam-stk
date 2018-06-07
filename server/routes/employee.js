const express = require('express');
const router = express.Router();

const employCtrl = require('../controllers/employee')

router.get('/',employCtrl.getEmployees);
router.post('/',employCtrl.createEmploee);
router.get('/:id',employCtrl.getEmplyoee);
router.put('/:id',employCtrl.editEmplyoee);
router.delete('/:id',employCtrl.deleteEmplyoee);

module.exports=router;