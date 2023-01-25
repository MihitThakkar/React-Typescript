//React
import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
//store
import store from "store";
//Paths
import ROUTE_PATH from "./paths";
//Containers
import {
  //Sample
  Landing,
  Actions,
  //General
  FAQ,
  TNC,
  DetailedFaq,
} from "containers";
//Components
import { Loader } from "components";
//Utils
import { history } from "utils";

//Routes
const Routes: React.FC = () => (
  <Provider store={store}>
    <Suspense fallback={<Loader isLoading={true} />}>
      <Router history={history}>
        <Switch>
          {/* Sample */}
          <Route path={ROUTE_PATH.SAMPLES.LANDING} exact component={Landing} />
          <Route path={ROUTE_PATH.SAMPLES.ACTIONS} component={Actions} />
          {/* General */}
          <Route path={ROUTE_PATH.GENERAL.FAQ} component={FAQ} />
          <Route path={ROUTE_PATH.GENERAL.TNC} component={TNC} />
          <Route
            path={ROUTE_PATH.GENERAL.DETAILED_FAQ}
            component={DetailedFaq}
          />
        </Switch>
      </Router>
    </Suspense>
  </Provider>
);

export default React.memo(Routes);
