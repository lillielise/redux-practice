import React from 'react';
import ExampleComponent from './Example-component';
import List from './List';

function App() {

  return (
    <React.Fragment>
      <h2>Articles</h2>
      <List />
      <ExampleComponent />
    </React.Fragment>
  );
}

export default App;
