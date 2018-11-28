import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { getStore } from "../js/store/index";
import App from "./components/App";

const store = getStore()

render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
)
