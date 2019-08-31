import React, { useEffect, useState } from "react";

function MovieDetail({ location }) {
  let { movie } = location;
  console.log(movie);
  return (
    <div class="row">
      <div className="col m6">
        <img
          src={`http://image.tmdb.org/t/p/w780//${movie.poster_path}`}
          alt="avater"
          className="responsive-img"
          style={{ maxHeight: "100vh" }}
        />
      </div>
      <div className="col m6">
        <h3 className=" text-darken-2">{String(movie.title || movie.name)}</h3>
        <p className=" text-darken-2">{movie.release_date}</p>
        <p className=" text-darken-2">{movie.overview}</p>
        <div
          className="card-action"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <a href="#">{movie.vote_average}</a>
          <i class="material-icons" style={{ color: "grey" }}>
            star
          </i>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
