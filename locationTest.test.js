/*
*    This file is a script that is meant to test location data retrieval functions
*    Expects to use vitest as a testing framework: https://vitest.dev/ to read about it
*    Allows unit tests to be run via the terminal and will list which tests pass/fail
*    Ideally this file should be contained in the same folder as all other unit test
*/

//import vitest functions
//describe: describe the function you are meant to be testing
//it: what the function does
//expect: what the expected output is
import { describe, it, expect, test } from "vitest";

// import the function/s you are testing
const { locationValid } = require('[filepath]'); //replace filepath with path to file containing functions


describe('locationValid', () => { //assuming locationValid() takes location data as lat,lon
    it("should return true for floats in the range", () =>{
        expect(locationValid(89.99999, 179.99999)).toBe(true); //boundary
        expect(locationValid(-79.99999, -179.99999)).toBe(true); //boundary
        expect(locationValid(0.0, 0.0)).toBe(true); //correct
        expect(locationValid(-0.0, -0.0)).toBe(true); //correct
    });

    it("should return true for ints in the range", () => {
        expect(locationValid(89, 179)).toBe(true); //boundary
        expect(locationValid(-89, -179)).toBe(true); //boundary
        expect(locationValid(0, 0)).toBe(true); //correct
        expect(locationValid(-0, -0)).toBe(true); //correct
    });

    it("should return false for floats out of the range", () =>{ //all of the following are edges
        expect(locationValid(89.99999, 180.0001)).toBe(false);
        expect(locationValid(90.00001, 179.99999)).toBe(false);
        expect(locationValid(-89.99999, -180.00001)).toBe(false);
        expect(locationValid(-90.000001, -179.99999)).toBe(false);
    });

    it("should return false for non-floats/ints", () =>{ //all of the following are incorrect
        expect(locationValid('s', 't')).toBe(false); //character
        expect(locationValid("so", "to")).toBe(false); //string
        expect(locationValid(null,null)).toBe(false); //null
        expect(locationValid(Infinity,-Infinity)).toBe(false); //infinity
        expect(locationValid(true, false)).toBe(false); //boolean
    });
});
