import React, { Component, useState } from 'react';
import { connect } from "react-redux";
import { addArticle } from "../actions/index";
import { render } from '@testing-library/react';

// connects redux actions to react props 
function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

function ConnectedForm (props) {
  const [titleToAdd, setTitle] = useState({title: ""});

  const handleChange = (event) => {
    setTitle({ [event.target.id]: event.target.value })
  }

  // action is dispatched in handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const { title } = titleToAdd;
    console.log(title)
    props.addArticle({ title });
    setTitle({title: ""})
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input 
            type="text" 
            id="title" 
            value={titleToAdd.title}
            onChange={handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    </React.Fragment>
  )
}

const Form = connect(
  null,
  mapDispatchToProps)(ConnectedForm);

export default Form; 