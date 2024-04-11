//test for company information (for database)
function testCompanyName() {
    var validTestName1 = "Company Name";
    var validTestName2 = "Company Name 2";
    var invalidTestName1 = 1.3; //float
    var invalidTestName2 = 1; //int
    var invalidTestName3 = ',' //char

    //array of valid and invalid test cases
    var validTestCases = [validTestName1, validTestName2];
    var invalidTestCases = [invalidTestName1, invalidTestName2, invalidTestName3];

    //test valid cases
    for(var i = 0; i < validTestCases.length; i++) {
        var result = companyName(validTestCases[i]);
        if(result === false) {
            console.log("Test failed for valid case: " + validTestCases[i]);
        } else {
            console.log("Test passed for valid case: " + i+1);
        }
    }

    //test invalid cases
    for(var i = 0; i < invalidTestCases.length; i++) {
        var result = companyName(invalidTestCases[i]);
        if(result === true) {
            console.log("Test failed for invalid case: " + invalidTestCases[i]);
        } else {
            console.log("Test passed for invalid case: " + i+1);
        }
    }
}  