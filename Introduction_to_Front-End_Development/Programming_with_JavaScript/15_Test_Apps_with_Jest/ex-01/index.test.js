const { default:TestRunner } = require('jest-runner');
const convertToUppercase = require("./index.js");

test('should return the uppercase version of "Hi, this code is going to be tested by jest."', () => { 
  expect(convertToUppercase("Hi, this code is going to be tested by jest.")).toBe("HI, THIS CODE IS GOING TO BE TESTED BY JEST.")
 })
