// // THE IMMUTABILITY RULE WHEN USING REDUCERS
// The approach of looping through an object to check for differences may work fine when you've only got 
// a few things to keep track of, but in a large application you often have lots of properties you're tracking, 
// on potentially thousands of objects. Checking each one of them any time any action occurs starts to become a 
// big performance issue.

// We can use the concept of "immutability" to help address this problem. As it turns out, checking whether something
// is the same reference is much faster/easier. So rather than performing a deep comparison of properties with a utility
// function like isEqual from the Lodash library:
// lodash.isEqual(object1, object2)

// Instead, if we could somehow know that any time state inside an object changed that we'd get a new object reference, 
// then our check could be simplified to just this:
// object1 === object2

// Unsurprisingly, that type of comparison is much much faster in JavaScript. Because instead of having to loop through and
// compare every value of every property in an object, we instead just check if we got the same object, or a different object!

// That’s the basic idea of “immutability.” It’s doesn't necessarily mean that we make objects that are somehow frozen, 
// so they cannot be changed. It means that we don't change the old objects, we replace them instead. I know I was confused
//  by this initially. It is possible to implement enforced immutability with tools like Immutable.js, but you don’t need 
// tools for it. Plain JavaScript will do fine, thank you.

// To do this, we follow the immutability rule: “If you change it, replace it.” So what does that look like in code?
// Rather than doing:
// const obj = {
//   something: 'some value',
//   other: 'another property value'
// }

// // here we’re just editing `obj` in place
// obj.something = 'some other value'

// Instead, you do it like this:
// const obj = {
//   something: 'some value',
//   other: 'the original value'
// }

// // Object.assign copies properties from all the objects
// // onto the first object from left to right.
// const newObject = Object.assign({}, obj, { something: 'some other value' })
// // So now without changing `obj` we've created a brand new object
// // that contains all previous properties and includes the new value
// // for our changed `.something` property
// // {
// //   something: 'some other value',
// //   other: 'the original value'
// // }

// // Using "Object spread"
// // If your environment supports it, you can
// // also use Object spread syntax to accomplish the
// // same thing as Object.assign
// const anotherNewObject = { ...obj, something: 'some other value' }
// We can do the same with arrays of objects, rather than editing them in place:
// const myStuff = [{ name: 'Henrik' }]

// // push modifies the array defined above
// myStuff.push({ name: 'js lovin fool' })
// You can return a new array, which can we can do several different ways:
// let myStuff = [
//   { name: 'henrik' }
// ]

// // Array.prototype.concat can be used to return a
// // new array with a new item at the end:
// myStuff = myStuff.concat([{ name: 'js lovin fool' }])
// // or at the beginning:
// myStuff = [{ name: 'js lovin fool' }].concat(myStuff)

// // The same can done with the spread "..." operator
// // if supported:
// myStuff = [...myStuff, { name: 'js lovin fool' }]
// // or:
// myStuff = [{ name: 'js lovin fool' }, ...myStuff]

// // .filter works great for removing items
// myStuff = myStuff.filter((item => item.name === 'henrik'))

// // we can also change items in place with `.map`
// // but we have to be sure we create new objects for
// // the items in the list we want to change:
// myStuff = myStuff.map((item => {
//   // editing one item
//   if (item.name === 'henrik') {
//     return Object.assign({}, item, { isNerdy: true })
//   }
//   // return all the ones we're not changing
//   return item
// })

// // we can also use .map to replace items entirely
// myStuff = myStuff.map(item => {
//   if (item.name === 'henrik') {
//       // a whole new object
//     return { name: 'someone else who is cooler' }
//   }
//   return item
// })
// So, this is what we must do in our reducers whenever we are updating state






















// // MORE ADVANCED TECHNIQUES ON IMMUTABILITY
// Updating an Object
// When you want to update the top-level properties in the Redux state object, copy the existing state with
// ...state and then list out the properties you want to change, with their new values.
// function reducer(state, action) {
//   /*
//     State looks like:

//     state = {
//       clicks: 0,
//       count: 0
//     }
//   */

//   return {
//     ...state,
//     clicks: state.clicks + 1,
//     count: state.count - 1
//   }
// }


// Redux: Update an Object in an Object
// (This isn’t specific to Redux – the same method applies with plain React state. See here for how to adapt it.)

// When the object you want to update is one (or more) levels deep within the Redux state, you need to make a copy 
// of every level up to and including the object you want to update. Here’s an example one level deep:
// function reducer(state, action) {
//   /*
//     State looks like:

//     state = {
//       house: {
//         name: "Ravenclaw",
//         points: 17
//       }
//     }
//   */

//   // Two points for Ravenclaw
//   return {
//     ...state, // copy the state (level 0)
//     house: {
//       ...state.house, // copy the nested object (level 1)
//       points: state.house.points + 2
//     }
//   }

// Here’s another example, this time updating an object that’s two levels deep:
// function reducer(state, action) {
//   /*
//     State looks like:

//     state = {
//       school: {
//         name: "Hogwarts",
//         house: {
//           name: "Ravenclaw",
//           points: 17
//         }
//       }
//     }
//   */

//   // Two points for Ravenclaw
//   return {
//     ...state, // copy the state (level 0)
//     school: {
//       ...state.school, // copy level 1
//       house: {         // replace state.school.house...
//         ...state.school.house, // copy existing house properties
//         points: state.school.house.points + 2  // change a property
//       }
//     }
//   }
// This code can get hard to read when you’re updating deeply-nested items!


// Redux: Updating an Object by Key
// (This isn’t specific to Redux – the same method applies with plain React state. See here for how to adapt it.)
// function reducer(state, action) {
//   /*
//     State looks like:

//     const state = {
//       houses: {
//         gryffindor: {
//           points: 15
//         },
//         ravenclaw: {
//           points: 18
//         },
//         hufflepuff: {
//           points: 7
//         },
//         slytherin: {
//           points: 5
//         }
//       }
//     }
//   */

//   // Add 3 points to Ravenclaw,
//   // when the name is stored in a variable
//   const key = "ravenclaw";
//   return {
//     ...state, // copy state
//     houses: {
//       ...state.houses, // copy houses
//       [key]: {  // update one specific house (using Computed Property syntax)
//         ...state.houses[key],  // copy that specific house's properties
//         points: state.houses[key].points + 3   // update its `points` property
//       }
//     }
//   }


// // Prepending an item to an array
// (This isn’t specific to Redux – the same method applies with plain React state. See here for how to adapt it.)
// The mutable way to do this would be to use Array’s .unshift function to add an item to the front. 
// Array.prototype.unshift mutates the array, though, and that’s not what we want to do.
// Here is how you can add an item to the beginning of an array in an immutable way, suitable for Redux:
// function reducer(state, action) {
//   /*
//     State looks like:

//     state = [1, 2, 3];
//   */

//   const newItem = 0;
//   return [    // a new array
//     newItem,  // add the new item first
//     ...state  // then explode the old state at the end
//   ];


// Redux: Add an item to an array
// (This isn’t specific to Redux – the same method applies with plain React state. See here for how to adapt it.)
// The mutable way to do this would be to use Array’s .push function to add an item to the end. 
// That would mutate the array, though.

// Here is how you can append an item to the end of an array, immutably:
// function reducer(state, action) {
//   /*
//     State looks like:

//     state = [1, 2, 3];
//   */

//   const newItem = 0;
//   return [    // a new array
//     ...state, // explode the old state first
//     newItem   // then add the new item at the end
//   ];
// You can also make a copy of the array with .slice, and then mutate the copy:
// function reducer(state, action) {
//   const newItem = 0;
//   const newState = state.slice();

//   newState.push(newItem);
//   return newState;


// Redux: Update an item in an array with map
// (This isn’t specific to Redux – the same method applies with plain React state. See here for how to adapt it.)
// Array’s .map function will return a new array by calling the function you provide, passing in each existing item,
// and using your return value as the new item’s value.
// In other words, if you have an array with N many items and want a new array that still has N items, use .map.

// You can update/replace one or more items with a single pass through the array.
// (If you have an array with N items and you want to end up with fewer items, use .filter. See Remove an item 
// from an array, below).
// function reducer(state, action) {
//   /*
//     State looks like:

//     state = [1, 2, "X", 4];
//   */

//   return state.map((item, index) => {
//     // Replace "X" with 3
//     // alternatively: you could look for a specific index
//     if(item === "X") {
//       return 3;
//     }

//     // Leave every other item unchanged
//     return item;
//   });
// }


// Redux: Update an object in an array
// (This isn’t specific to Redux – the same method applies with plain React state. See here for how to adapt it.)
// This works the same way as above. The only difference is we’ll need to construct a new object and return a copy of the 
// one we want to change.
// Array’s .map function will return a new array by calling the function you provide, passing in each existing item, 
// and using your return value as the new item’s value.

// In other words, if you have an array with N many items and want a new array that still has N items, use .map.
// You can update/replace one or more items with a single pass through the array.
// (If you have an array with N items and you want to end up with fewer items, use .filter. See Remove an item from an array).

// In this example we have an array of users with email addresses. One of them changed their email and we need to update it.
// I’ll show how the user’s ID and new email could come in as part of the action, but you can adapt this to accept the values
// from somewhere else of course (if you’re not using Redux, for instance).
// function reducer(state, action) {
//   /*
//     State looks like:

//     state = [
//       {
//         id: 1,
//         email: 'jen@reynholmindustries.com'
//       },
//       {
//         id: 2,
//         email: 'peter@initech.com'
//       }
//     ]

//     Action contains the new info:

//     action = {
//       type: "UPDATE_EMAIL"
//       payload: {
//         userId: 2,  // Peter's ID
//         newEmail: 'peter@construction.co'
//       }
//     }
//   */

//   return state.map((item, index) => {
//     // Find the item with the matching id
//     if(item.id === action.payload.userId) {
//       // Return a new object
//       return {
//         ...item,  // copy the existing item
//         email: action.payload.newEmail  // replace the email addr
//       }
//     }

//     // Leave every other item unchanged
//     return item;
//   });
// }


// Redux: Insert an item in the middle of an array
// (This isn’t specific to Redux – the same method applies with plain React state. See here for how to adapt it.)
// Array’s .splice function will insert an item, but it will also mutate the array.
// Since we don’t want to mutate the original, we can make a copy first (with .slice), then use .splice to insert an
//  item into the copy.

// The other way to do this involves copying in all the elements BEFORE the new one, then inserting the new one, and 
// then copying in all the elements AFTER it. It’s easy to get the indices wrong though.

// Pro tip: Write unit tests for these things! It’s easy to make off-by-one errors.
// function reducer(state, action) {
//   /*
//     State looks like:

//     state = [1, 2, 3, 5, 6];
//   */

//   const newItem = 4;

//   // make a copy
//   const newState = state.slice();

//   // insert the new item at index 3
//   newState.splice(3, 0, newItem)

//   return newState;

//   /*
//   // You can also do it this way:

//   return [                // make a new array
//     ...state.slice(0, 3), // copy the first 3 items unchanged
//     newItem,              // insert the new item
//     ...state.slice(3)     // copy the rest, starting at index 3
//   ];
//   */
// }


// Redux: Update an item in an array by index
// (This isn’t specific to Redux – the same method applies with plain React state. See here for how to adapt it.)

// We can use Array’s .map to return a new value for a specific index, and leave the other elements unchanged.
// function reducer(state, action) {
//   /*
//     State looks like:

//     state = [1, 2, "X", 4];
//   */

//   return state.map((item, index) => {
//     // Replace the item at index 2
//     if(index === 2) {
//       return 3;
//     }

//     // Leave every other item unchanged
//     return item;
//   });
// }


// Redux: Remove an item from an array with filter
// (This isn’t specific to Redux – the same method applies with plain React state. See here for how to adapt it.)
// Array’s .filter function will call the function you provide, pass in each existing item, and return a new array 
// with only the items where your function returned “true” (or truthy). If you return false, that item gets removed.

// If you have an array with N items and you want to end up with fewer items, use .filter.
// function reducer(state, action) {
//   /*
//     State looks like:

//     state = [1, 2, "X", 4];
//   */

//   return state.filter((item, index) => {
//     // Remove item "X"
//     // alternatively: you could look for a specific index
//     if(item === "X") {
//       return false;
//     }

//     // Every other item stays
//     return true;
//   });
// }

