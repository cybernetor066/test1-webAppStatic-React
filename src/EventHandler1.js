/* eslint-disable no-unused-vars */
// ***********************************************************************************************************************
import React from 'react';
import {useCallback, useState} from 'react';

// Handling events in functional components with the useCallback() API, in that way we no longer need to pass an event
// handler using props as done in class components.
// For the example below, any parameter used inside the function must be passed through a second parameter to 
// the useCallback() API, in an array form.
// Compare this event handler with that in the 'ChildComponent1' component in the 'ChildComponent1.js'
const Button2 = ()=> {
    let nameA = 'I am me';
    const handleClick = useCallback(() => {
        console.log("Standing by for your order!");
    }, [nameA])
    return (
        <button onClick={handleClick}/>
    )
}

export default Button2;