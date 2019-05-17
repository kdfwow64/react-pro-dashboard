import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import './assets/base.scss';
import configureStore from './config/configureStore';
import Main from './DemoPages/Main';
import * as serviceWorker from './serviceWorker';
import {
  clearAuthentication,
  clearAuthToken
} from './utilities/authentication';
import setupAxiosInterceptors from './utilities/axios-interceptor';

const store = configureStore();

const actions = bindActionCreators({ clearAuthentication }, store.dispatch);
setupAxiosInterceptors(
  () => actions.clearAuthentication('login.error.unauthorized'),
  clearAuthToken
);

const rootElement = document.getElementById('root');

const renderApp = Component => {
  ReactDOM.render(
    <MuiThemeProvider>
      <Provider store={store}>
        <HashRouter>
          <Component />
        </HashRouter>
      </Provider>
    </MuiThemeProvider>,
    rootElement
  );
};

renderApp(Main);

if (module.hot) {
  module.hot.accept('./DemoPages/Main', () => {
    const NextApp = require('./DemoPages/Main').default;
    renderApp(NextApp);
  });
}
serviceWorker.unregister();
