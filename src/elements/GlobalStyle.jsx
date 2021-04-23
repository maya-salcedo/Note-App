import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body {
  font-family: 'Nunito Sans', sans-serif;
  background-color: #112d4e;
  ${'' /* background-image: url("https://www.transparenttextures.com/patterns/lined-paper-2.png"); */}
  margin: 0px;
  padding: 1rem 0;
  width: 100%;
  overflow-x: hidden;
  min-height: 70vh;
}
h1 {
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
}
`;

export default GlobalStyle;