import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import { Auth } from "./Auth";

class Register extends React.Component {
  state = { redirectToReferrer: false, email: "", password: "" };

  register = () => {
    let { email, password } = this.state;

    if (!email) {
      return alert("Provide Email");
    }
    if (!password) {
      return alert("Provide a Password");
    }

    Auth.register({ email, password });
    this.setState({ redirectToReferrer: true });
  };

  render() {
    let { from } = this.props.location.state || {
      from: { pathname: "/login" }
    };
    let { redirectToReferrer, email, password } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

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

        <button className="btn" onClick={this.register}>
          Register
        </button>
        <Link to="/login" style={{ marginLeft: 20 }}>
          <button className="btn">Login</button>
        </Link>
      </center>
    );
  }
}

export default Register;
