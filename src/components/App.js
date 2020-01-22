import React from 'react';
import ExampleComponent from './example-component';
import List from './list';

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
