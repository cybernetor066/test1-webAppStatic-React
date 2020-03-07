/* eslint-disable no-unused-vars */
// ***********************************************************************************************************************
// ***********************************************************************************************************************
import React from 'react';

// (K).Keys to identify a list of DOM elements from the same hierarchy internally.
// whenever you are rendering a list of React components, each component needs to have a key attribute.
// when React has to render changes on a list of items, React just iterates over both lists of children
// at the same time and generates a mutation whenever there is a difference. If there are no keys set for
// the children, React scans each child. Otherwise, React compares the keys to know which were added or
// removed from the list.

// function UsingKeysInReactJS() {
//     const ITEMS = ['cat', 'dog', 'rat'];
//     function getItemList() {
//         return ITEMS.map((item) => <li key={item}>{item}</li>)
//     }
    
//     return (
//         <>
//         <ul>
//             {getItemList()}
//         </ul>
//         </>
//     )
// }
// // // for the above functional component, the component resolves to:
// // <ul>
// //     <li key='cat'>cat</li>
// //     <li key='dog'>dog</li>
// //     <li key='rat'>rat</li>
// // </ul>
// export default UsingKeysInReactJS;



// keys in react are used to identify a list of DOM elements from the same hierarchy internally
// so if you are iterating over an array to show a list of li elements, each of the li elements
// needs a unique identifier specified by the key property.This usually can be the id of your 
// database item or the index of the array.
// match.params.id
const KeysInReactJSWithID = ()=> {
    const toDos = [
        {
            id: 1, text:'value 1'
        },

        {
            id: 2, text:'value 2'
        },

        {
            id: 3, text:'value 3'
        },
    ];

    const toDos2 = toDos.params;

    return (
        <>
        <ul>
            {/* The braces below signifies that the codes inside it are JS Codes */}
            <li>{toDos[0].text}</li>
            {
                // work on this and get it rectified.
                // toDos2.map((toDo) => {<li key={`todo-${toDo.id}`}> {toDo.text} </li>})
                
                // we can use the array index method, if we dont have unique ids at hand
                // toDos2.map((toDo, index) => {<li key={`todo-${index}`}> {toDo.text} </li>})
            }
        </ul>
        </>
    )
}


export default KeysInReactJSWithID;