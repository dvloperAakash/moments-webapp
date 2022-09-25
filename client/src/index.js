import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";  //provider keeps the track of the store which is the global state and that allows us to access the store
// anywhere inside the app.
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import App from "./App";
import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Provider keeps the track of the store which is global state and that allow to access the store anywhere inside the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
