import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

export const Auth = {
  isAuthenticated: localStorage.getItem("user") != null ? true : false,

  register(user) {
    localStorage.setItem("user", JSON.stringify(user));
  },
  authenticate({ email, password }) {
    let data = localStorage.getItem("user");
    let user = JSON.parse(data);
    console.log(user);

    if (user) {
      if (user.email == email && user.password == password) {
        this.isAuthenticated = true;
      }
    }
  },
  signout(cb) {
    localStorage.removeItem("user");
    this.isAuthenticated = false;
  }
};

export const AuthStatus = withRouter(({ history }) =>
  Auth.isAuthenticated ? (
    <button
      className="btn"
      onClick={() => {
        Auth.signout();
        history.push("/");
      }}
    >
      Sign out
    </button>
  ) : null
);

export function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        Auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
