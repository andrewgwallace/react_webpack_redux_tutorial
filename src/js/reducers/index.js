import { ADD_ARTICLE } from "../constants/action-types";
import initialState from './initialState';

const articlesReducer = (state = initialState.articles, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      console.log("PAYLOAD ", action.formData)
      return [...state, action.formData]
      // return { ...state, [...state, action.payload] };
     //  return Object.assign([], state, [state].push(action.formData))
      // return Object.assign([], state, [...state].push(action.formData))
      // return [...state].push(action.payload)
    default:
      return state;
  }
};
export default articlesReducer;