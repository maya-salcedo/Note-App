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
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h1 {
  font-family: 'Rock Salt', cursive;
  color: #f9f7f7;
  font-size: 3.5rem;
}
`;

export default GlobalStyle;