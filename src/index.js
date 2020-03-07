/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { Link, NavLink, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import FirstLinkedComponent from './FirstLinkedComponent';
import Users from './Users';
import Error404 from './NotFound';
import Contact from './Contact';
import PerformanceMeasure from './reactDiffAlgo';
import StateManagement from './reactHooksPlusContext';
import {Provider} from './store';

// the Switch is used to handle error/notFound pages.
// const Routing =  (
//     <Router>
//     <div>
//     <h3>React Routing</h3>
//           {/* A BrowserRouter can only have one child element, so we wrap all we are
//           going to add in a single div element. */}
//         <Link to="/">Home</Link>
//         <br />
//         <br />

//         <Link to="/users">Users</Link>
//         <br />
//         <br />

//         <Link to="/myFirstLink">Go to my FirstLinkedComponent</Link>
//         <br />
//         <br />
        
//         <Switch>
//             <Route exact path="/" component={App} />
//             <Route path="/users" component={Users} />
//             <Route path="/myFirstLink" component={FirstLinkedComponent} />
//             <Route component={Error404} />
//         </Switch>
//     </div>
//     </Router>
// )





// NavLink is used to style the active routes so that the user knows on which page he or she is currently unto
// const Routing =  (
//     <Router>
//     <div>
//     <h3>React Routing</h3>
//           {/* A BrowserRouter can only have one child element, so we wrap all we are
//           going to add in a single div element. */}
//         <NavLink activeClassName="active" to="/">Home</NavLink>
//         <br />
//         <br />

//         <NavLink activeClassName="active" to="/users">Users</NavLink>
//         <br />
//         <br />

//         <NavLink activeClassName="active" to="/myFirstLink">Go to my FirstLinkedComponent</NavLink>
//         <br />
//         <br />
        
//         <Switch>
//             <Route exact path="/" component={App} />
//             <Route path="/users" component={Users} />
//             <Route path="/myFirstLink" component={FirstLinkedComponent} />
//             <Route component={Error404} />
//         </Switch>
//     </div>
//     </Router>
// )





// Programmatic navigation is when we need to redirect the user when an event happens on that route.
const Routing =  (
    <Router>
    <div>
    <Provider>
        
        <h3>React Routing</h3>
          {/* A BrowserRouter can only have one child element, so we wrap all we are
          going to add in a single div element. */}
        <NavLink activeClassName="active" to="/">Home</NavLink>
        <br />
        <br />

        <NavLink activeClassName="active" to="/users">Users</NavLink>
        <br />
        <br />

        <NavLink activeClassName="active" to="/contact">Contact</NavLink>
        <br />
        <br />

        <NavLink activeClassName="active" to="/reactdiffAlgo">Performance Measurement</NavLink>
        <br />
        <br />

        <NavLink activeClassName="active" to="/reactStateManagement">State management in reactJS</NavLink>
        <br />
        <br />

        <NavLink activeClassName="active" to="/myFirstLink">Go to my FirstLinkedComponent</NavLink>
        <br />
        <br />

        
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/users" component={Users} />
            <Route path="/contact" component={Contact} />
            <Route path="/reactdiffAlgo" component={PerformanceMeasure} />
            <Route path="/reactStateManagement" component={StateManagement} />
            <Route path="/myFirstLink" component={FirstLinkedComponent} />
            <Route component={Error404} />
        </Switch>

    </Provider>
    </div>
    </Router>
)



// Rendering the components
ReactDOM.render(Routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
