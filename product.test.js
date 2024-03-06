
// Basic test function
function test(testCondition, expected) {
    if (!expected) {
        throw new Error('Test failed: ' + expected);
    }
}

// Unit tests for product function
function testProduct() {
    // Test known product with string input.
    test(product('Heinz Ketchup') === 'Heinz', 'Heinz Ketchup is owned by Heinz.');

    // Test known product with UPC int input
    test(product('27896102000409') === 'Heinz', 'UPC 27896102000409 is owned by Heinz.');

    // Test known non-food product
    test(product('000000000000') === 'The UPC you have entered belongs to a non-food item.', 'UPC 000000000000 is a non-food item.')
}

// Try/Catch for running tests
try {
    testProduct();
    console.log('All tests passed.');
}
catch (error) {
    console.error('Test failed: ' + error.message);
}