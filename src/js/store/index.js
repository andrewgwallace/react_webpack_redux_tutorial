import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import articlesReducer from "../reducers/index";
import { combineReducers } from "redux";
import addArticleFormReducer from "../reducers/formReducer";
import initialState from '../reducers/initialState';

const devTools = typeof window === 'object' && window.devToolsExtension ? window.devToolsExtension : (() => noop => noop);

const rootReducer = combineReducers({
  articles: articlesReducer,
  addArticleForm: addArticleFormReducer
})

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = [
    applyMiddleware(thunk),
    devTools()
]
let store = null;
const composedEnhancers = compose(...enhancers)
export const getStore = () => {
    !store && (store = createStore(rootReducer, initialState, composedEnhancers ));
    return store;
}

// export default store;

