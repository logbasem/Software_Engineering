// Ticket #14 -- Product Routes

const express = require('express');

const router = express.Router();
const plController = require('../controllers/productLocalController.js');

//Routes for `productlocal` controller --------
router.get('/allProducts', plController.getAllProducts)

//get one product (by id)
router.get('/:id', plController.getProduct);

//update one product (by id)
router.put('/update/:id', plController.updateProduct);


