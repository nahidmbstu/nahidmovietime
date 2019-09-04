import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import { toast } from "react-toastify";

import "./App.css";
import { api_key } from "./api";
import SearchForm from "./SearchBar";
import { connect } from "react-redux";
import { makeFavorite } from "./Actions";

function MovieItem({ movie, makeFavorite }) {
  const makeFavotite = () => {
    movie.type = "tvserial";
    makeFavorite(movie);
    toast("show added to favorite");
  };

  return (
    <div className="col s12 m4">
      <div className="card small">
        <Link to={{ pathname: "/detail", movie: movie }}>
          <div className="card-image">
            <img
              src={`http://image.tmdb.org/t/p/w342//${movie.backdrop_path}`}
              alt="avater"
            />
            <span className="card-title">{movie.name}</span>
          </div>
          <div className="card-content ">
            <p className="truncate text-darken-2" style={{ color: "grey" }}>
              {movie.overview}
            </p>
          </div>
        </Link>
        <div
          className="card-action"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <a href="#">{movie.vote_average}</a>
          <i
            className="material-icons"
            style={{ color: "grey", cursor: "pointer" }}
            onClick={() => makeFavotite(movie)}
          >
            &hearts;
          </i>
        </div>
      </div>
    </div>
  );
}

function MovieList({ movies, makeFavorite }) {
  return (
    <div className="row">
      <h2 className="center">Popular Now</h2>
      {movies.map((movie, index) => (
        <MovieItem movie={movie} key={index} makeFavorite={makeFavorite} />
      ))}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array
};

MovieList.defaultProps = {
  movies: []
};

const Loader = () => (
  <div className="progress">
    <div className="indeterminate"></div>
  </div>
);

function TV({ tvshows, isFetching, error, makeFavorite }) {
  useEffect(() => {
    // first get All movies.
  }, []);

  return (
    <div className="row">
      {/* <SearchForm /> */}
      {isFetching ? (
        <Loader />
      ) : (
        <MovieList movies={tvshows} makeFavorite={makeFavorite} />
      )}
      {tvshows ? (
        <a className="center waves-effect waves-light btn ">Load More</a>
      ) : null}
    </div>
  );
}

function mapStateToProps({ tvshows }) {
  return {
    tvshows: tvshows.shows.results,
    isFetching: tvshows.isFetching,
    error: tvshows.error
  };
}

export default connect(
  mapStateToProps,
  { makeFavorite }
)(TV);
