var express = require('express');
var router = express.Router();
var salesController = require('../controllers/salesController');
var upload = require('../file_upload');

/* sales routes */

// Get Sales list
router.get('/', salesController.list_all_sales);

// Register Sale with invoice
router.post('/invoice', upload.single('invoice'), salesController.create_a_sale);

// Register Sale without invoice
router.post('/', salesController.create_a_sale);

// Update Sale with invoice
router.put('/invoice/:saleId', upload.single('invoice'), salesController.update_a_sale);

// Update Sale without invoice
router.put('/:saleId', salesController.update_a_sale);

// Delete Sale
router.delete('/delete/:saleId', salesController.delete_a_sale);

module.exports = router;
