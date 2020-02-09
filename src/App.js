import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import SandwichBuilder from "./containers/SandwichBuilder/SandwichBuilder";
import Checkout from "./containers/Checkout/Checkout";
import { connect } from "react-redux";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Orders from "./containers/Orders/Orders";
import Authentication from "./containers/Authentication/Authentication";
import Logout from "./containers/Authentication/Logout/Logout";
import * as actions from "./store/actions/index";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Authentication} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={SandwichBuilder} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
