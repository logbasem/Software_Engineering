//Brianna Patten
//Checks if the input is a string without a newline
function checkIfValid(query) {
    if (typeof query !== 'string' || query.includes('\n') || !/[a-zA-Z]/.test(query)) {
        return "Invalid search term"; 
    }

    return "Valid search term"; 
}

// Checks if the result given is expected
function testSearch(input, expected) {
    const result = checkIfValid(input);
    const isPassed = result === expected;
    console.log(`Unit test for search "${input}" ${isPassed ? 'passed' : 'failed'}`);
}

// Test cases
function testUserSearch() {
    //Valid test cases and their expected results
    var validSearch1 = "ketchup";
    var validSearch1Expected = "Valid search term";

    var validSearch2 = "M&M's candy";
    var validSearch2Expected = "Valid search term";

    //Invalid test cases and their expected results
    var invalidSearch1 = ", ";
    var invalidSearch1Expected = "Invalid search term";

    var invalidSearch2 = "\n";
    var invalidSearch2Expected = "Invalid search term";

    testSearch(validSearch1, validSearch1Expected);
    testSearch(validSearch2, validSearch2Expected);
    testSearch(invalidSearch1, invalidSearch1Expected);
    testSearch(invalidSearch2, invalidSearch2Expected);
}

// Runs the tests
testUserSearch();