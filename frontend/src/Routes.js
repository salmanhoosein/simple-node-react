import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Layout from "./views/layouts";
import MatrixMultiplication from "./views/MatrixMultiplication/MatrixMultiplication";
import CheckoutForm from "./views/Checkout";

import { useSelector } from "react-redux";
function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/app" />
      <Layout>
        <Switch>
          {/* <Redirect exact from="/app" to="/app/home" /> */}
          <Route
            exact
            path="/app/test-our-data"
            component={MatrixMultiplication}
          />
          <Route exact path="/app/upload-your-data" component={CheckoutForm} />
        </Switch>
      </Layout>
      <Redirect to="/app/home" />
    </Switch>
  );
}

export default Routes;
