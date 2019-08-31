import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function MovieItem({ movie }) {
  return (
    <div className="col s12 m4">
      <div className="card small">
        <Link to={{ pathname: "/detail", movie: movie }}>
          <div className="card-image">
            <img
              src={`http://image.tmdb.org/t/p/w342//${movie.backdrop_path}`}
              alt="avater"
            />
            <span className="card-title">{movie.title}</span>
          </div>
          <div className="card-content ">
            <p className="truncate text-darken-2" style={{ color: "grey" }}>
              {movie.overview}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

function FavoriteList({ favorites }) {
  console.log(favorites);
  return (
    <div className="row">
      <h2 className="center">Your Favorites</h2>
      {favorites.map((movie, index) => (
        <MovieItem movie={movie} key={index} />
      ))}
    </div>
  );
}

function mapStateToProps({ favorite }) {
  return {
    favorites: favorite.favorites
  };
}

export default connect(
  mapStateToProps,
  null
)(FavoriteList);
