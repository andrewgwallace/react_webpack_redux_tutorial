import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "../js/store/index";
import App from "./components/App";

render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
)


// PART 1 Code - OLD
// --------------
// import { addArticle } from "../js/actions/index";

// window.store = store;
// window.addArticle = addArticle; 