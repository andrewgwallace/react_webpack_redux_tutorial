import { ADD_ARTICLE, REVERSE_LIST } from "../constants/action-types";
import { reverseArticles } from "./helpers/index"

import initialState from './initialState';

const articlesReducer = (state = initialState.articles, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return [...state, action.formData];
    case REVERSE_LIST:
      return [...reverseArticles(state)];
    return state
      default:
      return state;
  }
};


export default articlesReducer;