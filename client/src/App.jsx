import React from 'react';
import GlobalStyle from './elements/GlobalStyle';
import Header from './components/Header';
import Notes from './components/Notes';

const App = () => {

  return(
    <div>
      <GlobalStyle />
        <Header text="My Notes" />
        <Notes />
    </div>
  );
  }
  
  export default App;