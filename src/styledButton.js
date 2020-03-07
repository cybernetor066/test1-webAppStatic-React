/* eslint-disable no-unused-vars */
// Styled components are one of the new ways to use CSS in modern JavaScript, thats scoped 
// to a single component and not leak to any other element in the page.
import ReactDom from 'react-dom'
import styled from 'styled-components'

const Button = styled.button`
    font-size:  1.5em;
    background-color: black;
    color: white;
    text-align: center;
`
export default Button;