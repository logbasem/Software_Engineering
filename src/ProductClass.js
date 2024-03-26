class Product{

    productName;
    productUPC;
    productCompany;
    
    Product(name, UPC, company){
        this.productName = name;
        this.productUPC = UPC;
        this.productCompany = company;
    }

    /** 
     * Sets Product name.
     * @param {*} name new product name
     */
    setProductName(name){
        this.productName = name;
    }

    /** 
     * Sets Product UPC.
     * @param {*} UPC new product UPC identifier
     */
    setProductUPC(UPC){
        this.productUPC = UPC;
    }

    /**
     * Sets Product company.
     * @param {*} company new Product manufacturer name
     */
    setProductCompany(company){
        this.productCompany = company;
    }
}