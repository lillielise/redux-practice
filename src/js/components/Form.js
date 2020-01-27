import React, { Component, useState } from 'react';
import { connect } from "react-redux";
import { addArticle } from "../actions/index";
import { render } from '@testing-library/react';

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

function ConnectedForm (props) {
  const [title, setTitle] = useState({title: ""});

  const handleChange = (event) => {
    setTitle({ [event.target.id]: event.targer.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const { titleToAdd } = title;
    props.addArticle({ titleToAdd });
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
            value={title}
            onChange={handleChange}
          />
        </div>
      </form>
    </React.Fragment>
  )
}
