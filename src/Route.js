import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import MovieDetail from "./MovieDetail";
import TV from "./TV";
import { connect } from "react-redux";
import { getMovies, getTVShows } from "./Actions";
import { Offline, Online } from "react-detect-offline";
import Login from "./Login";
import { PrivateRoute } from "./Auth";
import Favorite from "./Favorite";
import Register from "./register";

function AppRouter({ getMovies, getTVShows }) {
  useEffect(() => {
    // dispatch to get Movies
    getMovies();
    // dispatch to get shows
    getTVShows();
  }, []);

  return (
    <div>
      <Offline>
        <h3>You are Offline</h3>
      </Offline>
      <Online>
        <Router>
          <Navbar />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" exact component={Home} />
          <Route path="/tvshows" component={TV} />
          <Route path="/detail" component={MovieDetail} />
          <PrivateRoute path="/favorite" component={Favorite} />
        </Router>
      </Online>
    </div>
  );
}

export default connect(
  null,
  { getMovies, getTVShows }
)(AppRouter);
