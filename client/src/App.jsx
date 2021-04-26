import React from 'react';
import GlobalStyle from './elements/GlobalStyle';
import Header from './components/Header';
import Notes from './components/Notes';
import CreateNote from './components/CreateNote';

const App = () => {
  return(
    <div>
      <GlobalStyle />
        <Header text="My Notes" />
        <CreateNote />
        <Notes />
    </div>
  );
}
  
export default App;