/* eslint-disable no-unused-vars */
// ***********************************************************************************************************************
// ***********************************************************************************************************************
import React from 'react';
import {createContext, useState, useEffect, useContext, useReducer} from 'react';
import {RestaurantContext, Provider} from './store';


// (D).Combinning react hooks with react context, using it to share state and logic using functional components
// react hooks are a type of function that enables the execution of custom code in a base code.
// In React, hooks are special functions that allow us to "hook into" its core feautures.

// To get it working, we need to do a few things.
// 1.Define an initial state,
// 2.provide a function that contains actions that updates the state.
// 3.trigger useReducer to dispatch an updated state that's calculated relative to the initial state.



// The useContext hook
// we can simply access our state through the "value" variable
// const StateManagement = ()=> {
//     const newContext = createContext({color: 'black'});
//     const value = useContext(newContext);
//     console.log(value);  // Analyse these effects inside the webdeveloper's console
//     return (
//         <></>
//     )
// }


const StateManagement = ()=> {
    const { color, handleReset, handleRed, handleGreen, handleBlue } = useContext(RestaurantContext);
    return (
        <>
            {/* Analyse these effects inside the webdeveloper's console using console.log() */}
            <p>The current color is: {color}</p>
            <button onClick={()=> {
                handleRed();
                }}>
                Show Red Color
            </button>
            <br/>
            <br/>

            <button onClick={()=> {
                handleGreen();
                }}>
                Show Green Color
            </button>
            <br/>
            <br/>

            <button onClick={()=> {
                handleBlue();
                }}>
                Show Blue Color
            </button>
            <br/>
            <br/>

            <button onClick={()=> {
                handleReset();
                }}>
                Reset
            </button>
        </>
    )
}

export default StateManagement;