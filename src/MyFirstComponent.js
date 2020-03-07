/* eslint-disable no-unused-vars */
// ***********************************************************************************************************************
// ***********************************************************************************************************************
// import React from 'react';  // This is my first component
// import ChildComponent1 from './ChildComponent1';    // Import child components
// import ChildComponent2 from './ChildComponent2';
// // using function components with props itegration
// // You cannot introduce state using functional components in ES2015
// const MyFirstComponent = () => {
//     return (
//         <div className="firstComponentDiv1">
//             <p>Hello {prompt.name}! My excercises on reactJS begins here!!!.</p>
//             <p></p>
//         </div>
//     );
// }






// ***********************************************************************************************************************
// ***********************************************************************************************************************
// using ES2015 class component method with props, state integration and working with state
// import React from 'react';  // This is my first component
// import ChildComponent1 from './ChildComponent1';    // Import child components
// import ChildComponent2 from './ChildComponent2';
// class MyFirstComponent extends React.Component {
//     // Initialising the state.(Note that there will notbe any need to hardcode the Hello string inside the render() method.)
//     // that Hello text should then be changed to {this.state.greeting}
//     constructor(props) {
//         super(props);
//         this.state = {greeting: ''}
//     }


//     render() {
//         return (         
//             <div className="firstComponentDiv1">
//                 <p>Hey there! My excercises on reactJS begins here!!!.</p>
//                 <br />
//                 <ChildComponent1 />
//                 <ChildComponent1 />
//                 {/* <ChildComponent2 /> */}
//             </div>
//         );
//     }
// }







// ***********************************************************************************************************************
// ***********************************************************************************************************************
// Using react with:
// (A).The use of container components(provider, global components)
// (B).Context API
// (C).React Hooks
// (D).Combinning react hooks with react context, using it to share state and logic using functional components
// (E).Code splitting used to load only the JavaScript needed the moment it is needed.
// (F).Styled components and extension of it.(Allowing us to write plain css in our components without worrying about className collisions)
// (G).Using Prettier(for code formatting),Jest(for JS codes testing with help of matchers,setup,tearDown, describe & Mockers)
// (H).React routers(static Vs dynamic routes, Switch, BrowserRouter(normally Aliased as "Router"), Links and the Route)
// (I).React Testing
// (J).Performance measurement(React Diff algorithm)
// (K).Keys to identify a list of DOM elements from the same hierarchy internally.

// ################################################################################################
// A basic statefull functional component with react hook.
import React from 'react';  // This is my first component
import {useState, useEffect} from 'react'
import ChildComponent1 from './ChildComponent1';    // Import child components
// import ChildComponent2 from './ChildComponent2';

import './MyFirstComponent.css'
import Button from './styledButton';
// import Button2 from './EventHandler1';

// Code splitting with React.lazy() and React.Suspense()
const MySecondComponent = React.lazy(() => import('./MySecondComponent'))


// Component with state and side effects
const MyFirstComponent = () => {
    const [state, setState] = useState({counter: 0});
    // Where state is the variable to read the state and setState is the  function that updates the state 
    // of the component to reflect new values on the DOM and finally {counter:0} is where the initial state is set.

    // By default, effects run after every completed render. But, you can choose to fire it only when certain values 
    // have changed, passing an array of variables as a second optional parameter.

    // React first updates the DOM, then calls any	function passed	to useEffect().
    // All without	blocking the UI	rendering even on blocking code, unlike	the	old	componentDidMount	
    // and componentDidUpdate, which makes our apps feel faster.

    // Please be advised that the same componentWillUnmount job can be achieved by optionally returning
    // a function from our useEffect. Then to have the same result as componentDidMount, we can send an
    // empty array and it will run only once.
    // The useEffect() is used for adding logs, accessing 3rd party APIs and much more.
    useEffect(() => {
        console.log('Component did mount!! (and i will run only when counter changes)');
        return () => {
            console.log('Unmounted');
        }
    }, [state])    // React will only re-run the side effect if one of the items in this array list changes.

    const add1ToCounter = () => {
        const newCounterValue = state.counter + 1;
        setState({counter: newCounterValue});
    }

    return (
        <div className="body">
            <p>You clicked the 'Click me' button {state.counter} times</p>
            <Button onClick={add1ToCounter}>
                Click me.
            </Button>
            <br/>

            {/* <p>Testing event handling with the reactJS useCallback() API</p>
            <Button2>
                Click! to Test the useCallback() API
            </Button2> */}
            <br/>

            <React.Suspense fallback= {<p>Please wait.</p>}>
                <MySecondComponent />
            </React.Suspense>
        </div>
    )
}




























export default MyFirstComponent;