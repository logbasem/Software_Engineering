
// Basic test function, throw error on test failure.
function test(expected, message) {
    if (!expected) {
        throw new Error('Test failed: ' + expected);
    }
}

// Unit tests for product function.
function testProduct() {
    // Test known product with string input.
    test(product('Heinz Ketchup') === 'Heinz', 'Heinz Ketchup is owned by Heinz.');

    // Test known product with UPC input.
    test(product('27896102000409') === 'Heinz', 'UPC 27896102000409 is owned by Heinz.');

    // Test with known non-food product.
    test(product('000000000000') === 'The UPC you have entered belongs to a non-food item.', 'UPC 000000000000 is a non-food item.');
}

// Try to run tests, output pass notification if completed, else output error notification.
try {
    testProduct();
    console.log('All tests passed.');
} catch (error) {
    console.error(error.message);
}
