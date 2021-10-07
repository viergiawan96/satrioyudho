import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory as history } from "history";
// eslint-disable-next-line
import Login from "./pages/Login";
import RouteApp from "./router/RouteApp";
import ProtectRoute from "./router/ProtectRoute";

function App() {
  const auth = localStorage.getItem("Auth");

  useEffect(() => {}, [auth]);

  return (
    <div className="container mx-auto max-w-screen-md relative bg-whitesmoke h-screen">
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectRoute path="/" component={RouteApp} auth={auth} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
