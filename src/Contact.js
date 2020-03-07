/* eslint-disable no-unused-vars */
import React from 'react'

// Programmatic navigation is when we need to redirect the user when an event happens on that route.
class Contact extends React.Component {
  onSubmit = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <form>
        <input placeholder="name" type="name" />
        <input placeholder="email" type="email" />
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    )
  }
}
export default Contact