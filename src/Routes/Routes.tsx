//React
import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
//store
import store from "store";
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
import { Loader } from "components";
//Routes
const Routes: React.FC = () => (
  <Provider store={store}>
    <Suspense fallback={<Loader isLoading={true} />}>
      <Router basename={process.env.PUBLIC_URL}>
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
