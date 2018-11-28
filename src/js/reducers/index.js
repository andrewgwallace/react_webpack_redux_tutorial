import { ADD_ARTICLE, REVERSE_LIST } from "../constants/action-types";
import initialState from './initialState';

const articlesReducer = (state = initialState.articles, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      console.log("PAYLOAD ", action.formData)
      return [...state, action.formData]
    case REVERSE_LIST:
    console.log("REVERSE LIST")
    return Object.assign([], state, [...reverse(state)])
    default:
      return state;
  }
};

const reverse = (array) => {
  let j = array.length - 1;
  for (let i = 0; i < Math.floor(array.length/2); i++) {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
    j--;
  }
  return array;
}


export default articlesReducer;