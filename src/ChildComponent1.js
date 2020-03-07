/* eslint-disable no-unused-vars */
// import React from 'react';
// import './ChildComponent1.css'

// const ChildComponent1 = () => {
//     return (
//         <div className="ChildComponent2">
//             Hey!! i am childcomponent1!
//         </div>
//     );
// }

// export default ChildComponent1;



// // Using class components
// import React from 'react';
// import './ChildComponent1.css'

// class ChildComponent1 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             greeting: ' Hello!! ',
//             name:'ChildComponent1'
//         }

//         // Binding the germanyfy method.
//         // This simply implies that "Hey anywhere you see 'this' inside of me please am referring tomyself"
//         this.germanyfy = this.germanyfy.bind(this)
//     }



//     // method inside of classes
//     // Please be advised that the methods of ES6 classes are not bound,
//     // What thid means is that 'this' is not defined unless you define the method as
//     // in arrow function syntax when using the property initializer syntax with	Babel
//     // (enabled by default in create-react-app), otherwise you need to bind it manually in the constructor:
    
    
    
//     // Event handlers in reactJS are coventionally implemented
//     // as methods in components class
//     germanyfy(e) {
//         this.setState({greeting: ' Gutentag! '})
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.name} says
//                 {this.state.greeting}
//                 <button onClick={this.germanyfy}>Germanyfy!!</button>
//             </div>
//         )
//     }
// }

// export default ChildComponent1;

// Forms and user input
// Controlled vs uncontrolled form components
// In ReactJS, there are two main ways of handling forms which differ on how data is managed
// (1). If the data is handled by the DOM, we call them uncontrolled components.
// (2). But if the data is handled by the components we call them controlled components.
// And please be advised that controlled components is what you will use most of the time.



































// Congrats Mate!! you are half way to completing ReactJS Course!!





// Working with life cycles
