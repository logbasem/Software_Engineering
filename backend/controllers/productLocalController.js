// Ticket #14 - Product Routes

//Controller for `productlocal` Table
//model for querying
const ProductLocal = require('../models/productLocalModel');
const {Op} = require('sequelize');

const plController = {

    //todo: optimize searchTerm for barcode and other flags (vegan, local, ethical)
    //@desc query relevant products based on search keywords
    //@route GET /products/allProducts
    //@access 
    getAllProducts: async(req, res) => {
        //request parameters:
        // -- searchTerm represents the users query into the searchBar
        // -- pageSize represents the number of records to retrieve per page
        // -- page represents the current page of the search results in frontend
        const { searchTerm, page, pageSize} = req.query 
    
        try {
            const options = {
                where: {
                    [Op.or]: [
                    //search for any matching/similar products to query
                    //searchTerm is a string so we can't check any other columns (for now)
                        { type: {[Op.like]: `%${searchTerm}%` }},
                        { company: {[Op.like]: `%${searchTerm}%` }},
                    ]
                },
                offset: (page-1) * pageSize,
                limit: pageSize, //limit number of reuslts to page size
                //order the response by type, ascending
                order: [
                    ['type', 'ASC']
                ],
                distinct: true,
            };
            //query
            const {count, rows} = await ProductLocal.findAndCountAll(options);
            console.log(rows)
            //response returns num of items, etc
            return res.status(200).json({
                totalItems: count,
                totalPages: Math.ceil(count / pageSize),
                currentPage: parseInt(page),
                products: rows,
            });
        } catch(error) {
            console.log(error.message);
            return res.status(500).json({error: 'Internal server error'});
        }
    },

    //@desc get one products information
    //@route GET /products/:id
    //@access
    getProduct: async(req, res) => {
        try {
            await ProductLocal.findAll({
                //query by ID
                where: {
                    productID: req.params.id
                }
            }).then((product) => {
                if(!product) {
                    return res.status(404).json({error: 'Product not found'});
                }
                res.status(200).json(product);
            });
        }
        catch(error) {
            console.log(error.message);
            res.status(500).json({error: 'Server Error'});
        }
    
    },

    //@desc update product information
    //@route PUT /products/update/id
    updateProduct: async(req, res) =>{
        const {
            productID,
            type,
            barcode,
            company,
            megaCorp,
            ethicalSourced,
            localSourced,
        } = req.body; 
        //query the request
        try{
            await ProductLocal.update(
                {type, barcode, company, megaCorp, ethicalSourced, localSourced},
                { 
                    where: {
                        productID: productID,
                    }
                },
                    
            );
        }
        catch(error) {
            console.log(error.message);
        }
    },

    //TODO
    //@desc delete product 
    //@route DELETE /products/delete/id 
    deleteProduct: async(req,res) => {

    },
};

module.exports = plController