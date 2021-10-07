import React from "react";
import { Redirect, Route } from "react-router";

const ProtectRoute = ({ component: Component, auth, ...rest }) => {
  let dataAuth = JSON.parse(auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        dataAuth.status === 200 ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectRoute;
