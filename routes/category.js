var express = require("express");
var router = express.Router();

var categoryController = require('../controllers/category');

router.get('/', categoryController.showCategory);
router.get('/:id', categoryController.showCategoryById);
router.post('/',categoryController.createCategory);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;