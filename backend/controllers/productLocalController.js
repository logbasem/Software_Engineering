// Ticket #14 - Product Routes

//Controller for `productlocal` Table
//model for querying
const ProductLocal = require('../models/productLocalModel');
const {Op} = require('sequelize');

const plController = {

    //todo: optimize searchTerm for barcode and other flags (vegan, local, ethical)
    //@desc query relevant products based on search keywords
    //@route GET /products/searchAllProducts
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
                    productID: req.params.id, //get id from URL parameter
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
    //@route PUT /products/update/:id
    updateProduct: async(req, res) =>{
        const {
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
                        productID: req.params.id, //get id from URL parameter
                    }
                },
                    
            );
        }
        catch(error) {
            console.log(error.message);
        }
    },

    //@desc add new local product data
    //@route POST /products/createProduct
    createProduct: async(req, res) => {
        try {
            const {type, barcode, company, megaCorp, vegan, ethicalSourced, localSourced} = req.body;
        
            const newProductLocal = await ProductLocal.create({
                type,
                barcode,
                company,
                megaCorp,
                vegan, 
                ethicalSourced,
                localSourced
            });

            res.status(200).json({message: 'Local product created'});
        }
        catch(error) {
            console.log(error);
            res.status(500).json({error: 'Error registering user'});
        }
    },

    //TODO
    //@desc delete product 
    //@route DELETE /products/delete/id 
    deleteProduct: async(req,res) => {

    },
};

module.exports = plController