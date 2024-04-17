// Ticket #14 -- Product Routes

const express = require('express');

const router = express.Router();
const plController = require('../controllers/productLocalController.js');

//Routes for `productlocal` controller --------
//get products by search keywords
router.get('/searchAllProducts', plController.getAllProducts)

//get one product (by id)
router.get('/:id', plController.getProduct);

//update one product (by id)
router.put('/update/:id', plController.updateProduct);


module.exports = router;