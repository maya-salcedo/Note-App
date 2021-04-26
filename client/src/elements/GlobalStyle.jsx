import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body {
  font-family: 'Nunito Sans', sans-serif;
  background-color: #112d4e;
  background-image: url("https://www.transparenttextures.com/patterns/lined-paper-2.png");
  margin: 0px;
  padding: 1rem 0;
  width: 100%;
  overflow-x: hidden;
  min-height: 70vh;
}
`;

export default GlobalStyle;