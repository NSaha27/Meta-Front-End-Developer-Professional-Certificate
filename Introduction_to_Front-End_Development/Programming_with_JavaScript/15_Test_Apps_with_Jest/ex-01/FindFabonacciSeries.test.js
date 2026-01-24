const {default:TestRunner} = require("jest-runner");
const findFabonacciSeries = require("./FindFabonacciSeries.js");

test("should return a fabonacci series of 10 terms where the initial number is 2", () => {
  expect(findFabonacciSeries(2, 10)).toBe("2,2,4,6,10,16,26,42,68,110");
})
