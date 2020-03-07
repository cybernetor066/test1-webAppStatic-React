/* eslint-disable no-unused-vars */
// ***********************************************************************************************************************
// ***********************************************************************************************************************
import React from 'react';
import {createContext, useState, useEffect, useContext, useReducer} from 'react';

// combinning both useContext() and the useReducer() into a store.
const initialState = {color: 'Black'};
const RestaurantContext = createContext();

// const store = createContext(initialState);
// const showColorContext = createContext();

// Be advised the createContext returns an object with a Provider and Consumer component,
// this time we will be using only the Provider component and then the useContext hook
// when we need to access our state.
// const {Provider} = store;

// Action types
const actions = {
    RESET: 'RESET',
    SHOW_RED: 'SHOW_RED',
    SHOW_GREEN: 'SHOW_GREEN',
    SHOW_BLUE: 'SHOW_BLUE'
}

const colorReducer = (state, action) => {
    const {type} = action;
    switch(action.type) {
        case 'RESET':
            // return {initialState};
            return {...state, ...initialState};

        case 'SHOW_RED':
            // return {color: 'Red'};
            return {...state, color: 'Red'};

        case 'SHOW_GREEN':
            // return {color: 'Green'};
            return {...state, color: 'Green'};

        case 'SHOW_BLUE':
            // return {color: 'Blue'};
            return {...state, color: 'Blue'};

        default:
            return [...state];
    }
};

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(colorReducer, initialState);
    const value = {
        color: state.color,
        handleReset: ()=> {dispatch({type: actions.RESET})},
        handleRed: ()=> {dispatch({type: actions.SHOW_RED})},
        handleGreen: ()=> {dispatch({type: actions.SHOW_GREEN})},
        handleBlue: ()=> {dispatch({type: actions.SHOW_BLUE})} 
    }
    return <RestaurantContext.Provider value={value}> {children} </RestaurantContext.Provider>;
};

// When we need to manipulate our state, we will call the dispatch method and pass in an object with the 
// desired type as its argument.
// In other to access our state globally, we will need to wrap our root(<routing>) component in our StateProvider
// before rendering it in our ReactDOM.render()
// To be able to update our state, we call the dispatch method and pass in an object with a type(the action
// description as defined in our StateProvider component) as its parameter.
export {RestaurantContext, Provider};
