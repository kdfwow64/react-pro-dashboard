import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { clearAuthentication, clearAuthToken } from "./utilities/authentication";
import "./assets/base.scss";
import configureStore from "./config/configureStore";
import Main from "./DemoPages/Main";
import * as serviceWorker from "./serviceWorker";
import setupAxiosInterceptors from "./utilities/axios-interceptor";
import { bindActionCreators } from "redux";

const store = configureStore();

const actions = bindActionCreators({ clearAuthentication }, store.dispatch);
setupAxiosInterceptors(
  () => actions.clearAuthentication("login.error.unauthorized"),
  clearAuthToken
);

const rootElement = document.getElementById("root");

const renderApp = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Component />
      </HashRouter>
    </Provider>,
    rootElement
  );
};

renderApp(Main);

if (module.hot) {
  module.hot.accept("./DemoPages/Main", () => {
    const NextApp = require("./DemoPages/Main").default;
    renderApp(NextApp);
  });
}
serviceWorker.unregister();
