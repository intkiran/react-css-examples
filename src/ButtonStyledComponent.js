import React from "react";
import "./styles.css"
import styled from "styled-components";

class ButtonStyledComponent extends React.Component {

  render() {
    return <div>
      <Button type="button">Click</Button>
      <Button1 className="submitButton" type="button">Click</Button1>

    </div >

  }
}
export default ButtonStyledComponent;


const Button = styled.button`
font-size: 1rem; 
font-weight: 1.5; 
line-height: 1.5; 
color: white; 
border-radius: 25px; 
background-color: blue; 
padding: 0px 2em; 
outline: none;
 border: none;

  &:hover {
    color: white; 
    background-color: red; 
  }
`;

const Button1 = styled.submitButton`
font-size: 1rem; 
font-weight: 1.5; 
line-height: 1.5; 
color: white; 
border-radius: 25px; 
background-color: green; 
padding: 0px 2em; 
outline: none;
 border: none;

  &:hover {
    color: white; 
    background-color: yellow; 
  }
`;
