/* eslint-disable no-unused-vars */
import React from 'react';

// (I).React Testing
//  create a reactTesting.test.js file in the same directory folder

// simple functions testing
const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
// Or
// export const sum = (a, b) => a + b;
// export const mul = (a, b) => a * b;
// export const sub = (a, b) => a - b;
// export const div = (a, b) => a / b;
export {sum, mul, sub, div};




// Asynchronous testing
// testing callbacks
function upperCaseCallback(str, callback) {
    callback(str.toUpperCase())
} 
module.exports = upperCaseCallback;


// testing promises
const upperCasePromise = str => {
    return new Promise((resolve, reject) => {
        if(!str) {
            reject('Empty string')
            return
        }
        resolve(str.toUpperCase())
    })
}
module.exports = upperCasePromise;


// testing async/await
// use the same upperCasePromise above since an Async/Await is used on promises.


// Mock testing 
// In testing, mocking allows you to test functionality that depends on:
// Database, Network requests, access to tfiles, any external system
// so that your tests can run faster giving a fast development time, independent of network connections


// Snapshot testing
// snapshot testing is a pretty cool feauture offered by jest.
// It can memorise how your ui components are rendered and compare it to the current test, raising an error
// if there is a mismatch.