/* eslint-disable no-unused-vars */
// ***********************************************************************************************************************
// ***********************************************************************************************************************
import React from 'react';  // This is my second component
import ChildComponent1 from './ChildComponent1';    // Import child components
import ChildComponent2 from './ChildComponent2';
import styled from 'styled-components';
import Button from './styledButton';
// import UsingKeysInReactJS from './reactKeys';
import KeysInReactJSWithID from './reactKeys';

// using function components with props itegration
// You cannot introduce state using functional components in ES2015


// Introducing the styled button inheritance
const RedButton = styled(Button)`
    color: red;
`


const MySecondComponent = () => {
    var name = 'MySecondComponent';
    return (
        <div className="secondComponentDiv1">
            <p>Hello, this is {name}! and My excercises on reactJS continues here!!!.</p>
            <h3>This RedButton inherits from a previously styled button</h3>
            <RedButton>
                Red button
            </RedButton>

            <Button>
                Normal button
            </Button>

            <RedButton>
                Red button
            </RedButton>
            <br />  
            <br />
            
            {/* <h1>Using keys in reactJS</h1>
            <UsingKeysInReactJS />
            <br />  
            <br /> */}

            <h1>Using keys in reactJS with the help of 'Id's'</h1>            
            <KeysInReactJSWithID />                      

        </div>
    );
}
export default MySecondComponent;