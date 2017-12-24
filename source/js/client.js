import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import "babel-polyfill";
import configureStore from "config/store";
import App from "views/App";

import es6Promise from "es6-promise";
import "isomorphic-fetch";
// Load SCSS
import "../scss/app.scss";

import NotFound from './views/NotFound';
import HomePage from './views/Home/Home';
import ShotsList from './views/ShotsList/ShotsList';
import ShotItem from './views/ShotsItem/ShotItem';
import ShotView from './views/ShotView/ShotView';

es6Promise.polyfill();

const store = configureStore();

const Root = () => (
  <AppContainer>
    <Provider store={store}>
      <App>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ShotItem} />
            <Route exact path="/:id" component={ShotView} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </App>
    </Provider>
  </AppContainer>
);

ReactDOM.render(<Root />, document.getElementById("root"));
// Render app
// render(App);

if (module.hot) {
  module.hot.accept("./views/App/", () => {
    const NewClient = require("./views/App/index").default; // eslint-disable-line global-require

    render(NewClient);
  });
}
