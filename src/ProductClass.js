class Product{

    productName;
    productUPC;
    productCompany;
    
    Product(name, UPC, company){
        this.productName = name;
        this.productUPC = UPC;
        this.productCompany = company;
    }

    setProductName(name){
        this.productName = name;
    }

    setProductUPC(UPC){
        this.productUPC = UPC;
    }

    setProductCompany(company){
        this.productCompany = company;
    }
}