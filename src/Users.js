/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// url parameters helps us to render the same component based on its dynamic url like in our Users component assume that
// they are different users with ID 1,2,3 


// class Users extends React.Component {
//   render() {
//     const { params } = this.props.match
//     return (
//       <div>
//         <h1>Users</h1>
//         <p>{params.id}</p>
//       </div>
//     )
//   }
// }
// export default Users;



// // nested routing helps us to render the sub-routes like users/1, users/2 and users/3.
// const User = ({ match }) => <p>{match.params.id}</p>
// class Users extends React.Component {
//   render() {
//     const { url } = this.props.match
//     return (
//       <div>
//         <h1>Users</h1>
//         <strong>select a user</strong>
//         <ul>
//           <li>
//             <Link to="/users/1">User 1 </Link>
//           </li>
//           <li>
//             <Link to="/users/2">User 2 </Link>
//           </li>
//           <li>
//             <Link to="/users/3">User 3 </Link>
//           </li>
//         </ul>
//         <Route path="/users/:id" component={User} />
//       </div>
//     )
//   }
// }
// export default Users





// trying to use a functional component with state enabled.......(work is achieved and completed!)
// nested routing helps us to render the sub-routes like users/1, users/2 and users/3.
// In your routes, you can look up the dynamic parameters in match.params
const User = ({ match }) => <p>{match.params.id}</p>
const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <strong>select a user</strong>
      <ul>
        <li>
          <Link to="/users/1">User 1 </Link>
        </li>
        <li>
          <Link to="/users/2">User 2 </Link>
        </li>
        <li>
          <Link to="/users/3">User 3 </Link>
        </li>
      </ul>
      <Route path="/users/:id" component={User} />
    </div>
  )
}
export default Users