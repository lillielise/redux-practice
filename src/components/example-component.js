import React, { useState } from 'react';

function ExampleComponent(props) {

  const [articles, setArticles] = useState([
    {title: 'title1', id: 1},
    {title: 'title2', id: 2}
  ]);

  const [button, setButton] = useState("");

  const onYesPress = () => {
    setButton("Yes");
    console.log({ button });
  };

  const onNoPress = () => {
    setButton("No");
    console.log({ button });
  };


  return(
    <React.Fragment>
      <ul>
        {articles.map(element => 
            <li key={element.id}>
              {element.title}
            </li> 
          )}
      </ul>

      <div>
        <button onClick={() => onYesPress()}>Yes</button>
        <button onClick={() => onNoPress()}>No</button>
      </div>
    </React.Fragment>
  ) 
}

export default ExampleComponent 