// Written by: M. Behrens
// Description: This file contains the tests for the barcodeScan.js file.

class barcodeScanTest {
    constructor() {
        this.barcodeScan = require('../barcodeScan.js');
    }

    //method for checking if parameters are equal
    assertEqual(expectedResult, actualResult) {
        if(expectedResult == actualResult) {
            console.log("barcodeScan test passed");
        }
        else {
            console.log("barcodeScan test failed");
        }
        }


    // Test the scanBarcode function
    testScanBarcode() {
        console.log("Testing scanBarcode function...");
        this.barcodeScan.scanBarcode();
        let result = File.exists("temp_image.jpg");
        this.assertEqual(true, result);
    }

    // Test the retrieveBarcodeData function
    testRetrieveBarcodeData() {
        console.log("Testing retrieveBarcodeData function...");
        let result = this.barcodeScan.retrieveBarcodeData("test_image.jpg");
        this.assertEqual("1234567890", result);
    }


    // Test the IdProduct function
    testIdProduct() {
        console.log("Testing idProduct function...");
        let result = this.barcodeScan.idProduct("1234567890");
        this.assertEqual("Product found", result);
    }

}