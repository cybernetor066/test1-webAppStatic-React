/* eslint-disable no-unused-vars */
// ***********************************************************************************************************************
// ***********************************************************************************************************************
import React from 'react';
// import Perf from 'react-addons-perf';




// (J).Performance measurement(React Diff algorithm)
// To improve the performance of react components, we should be able to measure it.

// There are several methods that you can use with the Perf class
// the most important one which you will need most of the time is Perf.printWasted() which gives you the
// tabular representation of your individual component's wasted time.

// In other to decide if two nodes are different, React differentiates 3 cases
// (1). Two nodes are different, if they have different types:
// for example, <div>.....</div> is different from <span>.....</span>
// (2). Whenever two nodes have different keys:
// for example, <div key="1">.....</div> is different from <div key="2">.....</div>

// NOTE: If [two nodes] are not of the same type, react is not going to even try at matching what they render,
// it is just going to remove the first one from the DOM and insert the second one.
// Also it is of utmost importance to note that HTML DOM is expensive but Virtual DOM is cheap because the
// Virtual DOM is a Javascript Object.
const PerformanceMeasure = ()=> {
    return(
        <>
        {/* {Perf.printWasted()} */}
        <p>
            react-addons-perf no longer works at all in React 16. <br/>
            It’s likely that we’ll release a new version of this tool in the future. <br/>
            In the meantime, you can use your browser’s performance tools to profile React components.
        </p>
        </>
    )
};




export default PerformanceMeasure;