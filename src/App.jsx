import React from 'react';
import GlobalStyle from './elements/GlobalStyle';
import Notes from './components/Notes';

const App = () => {
    return(
      <div>
        <GlobalStyle />
          <h1>My Notes</h1>
          <Notes />
      </div>
    );
  }
  
  export default App;