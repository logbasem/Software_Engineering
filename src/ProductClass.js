class Product{

    /**
     * Official, full name of Product
     * @type {string}
     */
    productName;
    /**
     * Product UPC identification
     * @type {number || String}
     */
    productUPC;
    /**
     * Name of manufacturing company
     * @type {String}
     */
    productCompany;
    
    /**
     * Creates a Product object and sets the product's name, UPC, and manufacturing company.
     * @param {String} name 
     * @param {number || String} UPC 
     * @param {String} company 
     */
    Product(name, UPC, company){
        this.productName = name;
        this.productUPC = UPC;
        this.productCompany = company;
    }

    /** 
     * Sets Product name.
     * @param {String} name new product name
     */
    setProductName(name){
        this.productName = name;
    }

    /** 
     * Sets Product UPC.
     * @param {number || String} UPC new product UPC identifier
     */
    setProductUPC(UPC){
        this.productUPC = UPC;
    }

    /**
     * Sets Product company.
     * @param {String} company new Product manufacturer name
     */
    setProductCompany(company){
        this.productCompany = company;
    }

    /**
     * Returns Product name.
     * @returns {String} product name variable
     */
    getProductName(){
        return this.productName;
    }

    /**
     * Returns Product UPC identification.
     * @returns {number || String} product UPC variable
     */
    getProductUPC(){
        return this.productUPC;
    }

    /**
     * Returns name of Product manufacturing company.
     * @returns {String} product company variable
     */
    getProductCompany(){
        return this.productCompany;
    }
}