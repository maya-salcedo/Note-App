import React from "react";
import styled from 'styled-components';

const StyledHeading = styled.h1`
  font-family: 'Rock Salt', cursive;
  color: #f9f7f7;
  font-size: 3.5rem;
  text-align: center;
  margin: 0.5rem;
  @media(max-width: 380px){
    font-size: 3rem;
    margin: 0;
  }
  @media(max-width: 308px){
    font-size: 2.5rem;
  }
`; 

const Header = ({ text }) => <StyledHeading>{text}</StyledHeading>;

export default Header;
