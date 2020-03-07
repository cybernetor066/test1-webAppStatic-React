/* eslint-disable no-unused-vars */
// running npm test results in Jest beign run on all the test files it finds and returning us the end result.
import React from 'react';
import {sum, mul, sub, div} from './reactTesting';
// Or
// const { sum, mul, sub, div } = require('./reactMeasurement');
import upperCaseCallback from './reactTesting';
import upperCasePromise from './reactTesting';
import renderer from 'react-test-renderer';
import App from './App';

// import {render, fireEvent} from 'react-testing-library';
// This one is oldschool and no longer supported by react Team, try this one instead
import {render, fireEvent} from '@testing-library/react';
// import Button from './styledButton';


// // Normal general testing
// test('Adding 1 + 1 equals 2', ()=> {
//     expect(sum(1,1)).toBe(2)
// });

// test('Multiplying 1 * 1 equals 1', ()=> {
//     expect(mul(1,1)).toBe(1)
// });

// test('Subtracting 1 - 1 equals 0', ()=> {
//     expect(sub(1,1)).toBe(0)
// });

// test('Dividing 1 / 1 equals 1', ()=> {
//     expect(div(1,1)).toBe(1)
// });



// Matchers
// Apart from the toBe() method used in previous examples as the only matcher, there are others like:
// toBe, toEqual, toBeEqual, toBeNull, toBeDefined, toBeUndefined toBeCloseTo just to mention a few.
// and all those matchers can be negated using ".not" inside the statement, for example, ".not.toBe(3)"

// Setup
// Before running ur tests, you will want to perform some initialisation,
// 1.To do something once before all the tests run, use the beforeAll(()=> {Do something}).
// 2.To do something before each test runs, use beforeEach(()=> {Do something}).

// Teardown
// You can perform certain actions after each test runs e.g afterEach() and afterAll()


// // Group tests using describe()
// // you can create groups of tests in a single file that isolate the setup and the teardown functions.
// describe('first set', ()=> {
//     beforeEach(()=> {
//         console.log('One test completed successfully!');
//     })
//     afterAll(()=> {
//         console.log('All test completed successfully!')
//     })
//     // Normal general testing
//     test('Adding 1 + 1 equals 2', ()=> {
//         expect(sum(1,1)).toBe(2)
//     });

//     test('Multiplying 1 * 1 equals 1', ()=> {
//         expect(mul(1,1)).toBe(1)
//     });

//     test('Subtracting 1 - 1 equals 0', ()=> {
//         expect(sub(1,1)).toBe(0)
//     });

//     test('Dividing 1 / 1 equals 1', ()=> {
//         expect(div(1,1)).toBe(1)
//     });
// })




// Testing asynchronous functions
// Asynchronous functions code in modern javascript can have basically 2 forms: callbacks and promises.
// on top of promises, we can use async and await.


// // Callback testing
// // To test a callback, the execution of the test file ends before the callback is called, to fix this, pass a parameter
// // to the test function which you can conveniently call done, jest will wait until you call done() before ending that test:
// test(`uppercase 'test' to equal 'TEST'`, (done)=> {
//     upperCaseCallback('test', (str)=> {
//         expect(str).toBe('TEST')
//         done()
//     })
// })


// // Testing promises
// // with functions that return promises, we simply return a promise from the test
// test(`uppercase 'test' to equal 'TEST'`, ()=>{
//     return upperCasePromise('test').then(str =>{
//         expect(str).toBe('TEST')
//     })
// })

// // promise that are rejected can be tested using catch()
// // with functions that return promises, we simply return a promise from the test
// test(`uppercase 'test' to equal 'TEST'`, ()=>{
//     return upperCasePromise('').catch(e =>{
//         expect(e).toMatch('Empty string')
//     })
// })


// // Async/await
// // To test functions that return promises we can also use async/await, which makes the syntax very
// // straight forward and simple:
// test(`uppercase 'test' to equal 'TEST'`, async ()=>{
//     const str = await upperCasePromise('test')
//         expect(str).toBe('TEST')
// })


// // Snapshot testing
// // the first time you run this test, jest saves the snapshot to the __snapshots__ folder.
// // then the next time the test compares the output of <App /> to this, if the App component has some changes,
// // you will get an error.
// // if your change was intended, pressing <u> will update the failing snapshots and make the test pass.
// // you can also update the snapshot by running <jest -u> or <jest --updateSnapshot> outside of watch mdode.

// **********************************************************************
// it('checking if it renders correctly', ()=>{
//     const tree = renderer.create(<App />).toJSON()
//     expect(tree).toMatchSnapshot()
// })

// // **********************************************************************
// test('First test', ()=>{
//     expect(true).toBeTruthy()
// })


// Testing react components using jest and the `react-testing-library` (The latest version is called '@testing-library/react')
// you can test your first react component using Jest and `react-testing-library` which is a great help as it allows us to 
// inspect the output of every component and to apply events on them.
const Button = ({increment, onClickFunction}) => {
    const handleClick = ()=>{
        onClickFunction(increment)
    }
    return <button onClick={handleClick}>+{increment}</button>
}


var count;
const incrementCount = increment => {
    count += increment;
}
test('+1 Button works as expected', ()=> {
    count = 0;
    const {container} = render(
        <Button increment={1} onClickFunction={incrementCount} />
    )
    const button = container.firstChild;
    expect(button.textContent).toBe('+1');
    expect(count).toBe(0);
    fireEvent.click(button);
    expect(count).toBe(1);
})
