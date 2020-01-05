import * as React from "react";
import * as ReactDOM from "react-dom";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { App } from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
