import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/"; // Incorreclty imported in the tutorial.
import App from "./components/App";

render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
)

// Only used for demontration purposes in browser console.
// import store from "../js/store";
// import { addArticle } from "../js/actions";

// window.store = store;
// window.addArticle = addArticle;