import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import M from "materialize-css";

import "./App.css";
import { api_key } from "./api";
import SearchForm from "./SearchBar";
import { connect } from "react-redux";
import { getMovies, makeFavorite } from "./Actions";

function MovieItem({ movie, makeFavorite }) {
  const makeFavotite = movie => {
    movie.type = "movie";
    makeFavorite(movie);
    M.Toast("added to favorites");
  };

  return (
    <div className="col s12 m4">
      <div className="card small">
        <Link to={{ pathname: "/detail", movie: movie }}>
          <div className="card-image">
            {/* <img
              src={`http://image.tmdb.org/t/p/w342//${movie.backdrop_path}`}
              alt="avater"
            /> */}
            <span className="card-title">{movie.original_title}</span>
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
            class="material-icons"
            style={{ color: "grey", cursor: "pointer" }}
            onClick={() => makeFavotite(movie)}
          >
            star
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

function Home({ all_movies, isFetching, error, getMovies, makeFavorite }) {
  let [page, setPage] = useState(2);
  return (
    <div className="row">
      <SearchForm />

      {all_movies ? (
        <div>
          <MovieList movies={all_movies} makeFavorite={makeFavorite} />
        </div>
      ) : null}
      {isFetching ? (
        <Loader />
      ) : (
        <a
          className="load-more"
          onClick={() => {
            getMovies(page);
            let newPage = page + 1;
            setPage(newPage);
          }}
        >
          Load More
        </a>
      )}
    </div>
  );
}

function mapStateToProps({ movies }) {
  return {
    all_movies: movies.movies,
    isFetching: movies.isFetching,
    error: movies.error
  };
}

export default connect(
  mapStateToProps,
  { getMovies, makeFavorite }
)(Home);
