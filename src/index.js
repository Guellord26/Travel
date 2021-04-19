import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker'; 
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./Study/Store/index";
import App from "./Study/Components/App";
import LoadingIndicator from "./Study/Components/Loader/Loader"

render(
  <Provider store={store}>
    <App />   
  </Provider>,
  document.getElementById("root")
);

unregister();