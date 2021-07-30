var express = require("express");
var router = express.Router();

var companyController = require('../controllers/company');

router.get('/', companyController.showCompany);
router.get('/:id', companyController.showCompanyById);
router.post('/',companyController.createCompany);
router.put('/:id', companyController.updateCompany);
router.delete('/:id', companyController.deleteCompany);

module.exports = router;