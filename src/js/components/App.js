import React from 'react';
import ExampleComponent from './Example-component';
import List from './List';
import Form from './Form';

function App() {

  return (
    <React.Fragment>
      <h2>Articles</h2>
      <List />
      <div>
        <h2>Add a new article</h2>
        <Form />
      </div>
      {/* <ExampleComponent /> */}
    </React.Fragment>
  );
}

export default App;
