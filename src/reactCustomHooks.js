/* eslint-disable no-unused-vars */
// ***********************************************************************************************************************
import React from 'react';
import {useCallback, useState} from 'react';

// Enabling cross-component communication using custom hooks, having one more way to share state and logic between components.
// The ability to write your own hooks is the feature that is going to significantly alter how
// you write React apps in the future.
// A reactJS hook is just a function that conventionally starts with use. It can accept an arbitrary number of arguments and
// return anything it wants.

const useGetData = ()=> {
    var data = `Hey! this is a custom hook called "useGetDate()"`
    return data
}

// And then in your own components, you can use the hook like this:
// Michael is a very good boy
// Rachel
const TestCustomHook = ()=> {
    const data2 = useGetData();
    const user
}