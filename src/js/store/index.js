import { createStore } from "redux";
import articlesReducer from "../reducers/index";
import { combineReducers } from "redux";
import addArticleFormReducer from "../reducers/formReducer";
import initialState from '../reducers/initialState';

const rootReducer = combineReducers({
  articles: articlesReducer,
  addArticleForm: addArticleFormReducer
})

const store = createStore(rootReducer, initialState);

export default store;

