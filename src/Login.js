import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import { Auth } from "./Auth";

class Login extends React.Component {
  state = { redirectToReferrer: false, email: "", password: "" };

  login = () => {
    let { email, password } = this.state;
    if (!email) {
      return alert("Provide Email");
    }
    if (!password) {
      return alert("Provide a Password");
    }

    Auth.authenticate({ email, password });
    this.setState({ redirectToReferrer: true });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    let { email, password } = this.state;

    return (
      <center>
        <form>
          <div class="row">
            <div class="input-field col s12">
              <input
                id="Email"
                type="email"
                class="validate"
                value={email}
                onChange={e => {
                  this.setState({ email: e.target.value });
                }}
              />
              <label htmlFor="Email">Email</label>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  id="password"
                  type="password"
                  class="validate"
                  value={password}
                  onChange={e => {
                    this.setState({ password: e.target.value });
                  }}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
          </div>
        </form>

        <button
          className="btn"
          onClick={this.login}
          style={{ marginRight: 20 }}
        >
          Log in
        </button>
        <Link to="/register">
          <button className="btn">Register</button>
        </Link>

        <a
          style={{ position: "absolute", bottom: 10, left: 10 }}
          href="https://github.com/nahidmbstu/nahidmovietime"
          target="_blank"
        >
          Github
        </a>
      </center>
    );
  }
}

export default Login;
