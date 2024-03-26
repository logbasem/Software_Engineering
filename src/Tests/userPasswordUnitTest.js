//Kaitlyn Peters
//class for testing parameters of UserPassword
class TestUserPassword {
    //method for checking if parameters are equal
    assertEqual(expectedResult, actualResult) {
        if(expectedResult == actualResult) {
            console.log("Unit test passed");
        }
        else {
            console.log("Unit test failed");
        }
    }

    //test for password length
    testPasswordLength(self) {
        //arrange:
        //selected password for testing
        let testPassword = "pass1";
        //testPassword should give a false result
        let expectedResult = false; 
        
        //action: test method
        actualResult = validPasswordLength(testPassword);

        //assert: test what result should be
        self.assertEqual(expectedResult, actualResult); 

        //validPassword should return false and our expected result should be false. 
        //thus the unit test should pass
    }

    //check that password contains a capital letter, number, and a special character
    testPasswordSpecialCharacters(self) {
        let testPassword = "Password123!"
        //the test password should give a true result
        let expectedResult = true; 

        //test method
        actualResut = validPasswordCharacters(testPassword);
        //test what result should be
        self.assertEqual(expectedResult, actualResult);
    }
}