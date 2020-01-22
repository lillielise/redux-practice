import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
}

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    // NO GO - push mutates the original array therefore breaking the immutability principle in redux - AVOID MUTATIONS
    // state.articles.push(action.payload);
    return Object.assign({}, state, {articles: state.articles.concat(action.payload)});
  }
  return state;
}

export default rootReducer;