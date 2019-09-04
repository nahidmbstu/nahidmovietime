import { api_key } from "../api";

export function getMovies(page = 1) {
  return async function(dispatch) {
    /// start the fetching
    dispatch({ type: "FETCHING_STARTED" });
    /// fetch data

    try {
      let res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=" +
          page +
          "&api_key=" +
          api_key
      );
      let data = await res.json();
      console.log(data);

      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      // get Error
      dispatch({ type: "FETCH_ERROR", error: error });
    }
  };
}

export function getTVShows(page = 1) {
  return async function(dispatch) {
    /// start the fetching
    dispatch({ type: "TV_FETCHING_STARTED" });
    /// fetch data

    try {
      let res = await fetch(
        "https://api.themoviedb.org/3/tv/popular?api_key=" + api_key
      );
      let data = await res.json();

      console.log(data);

      dispatch({ type: "TV_FETCH_SUCCESS", payload: data });
    } catch (error) {
      // get Error
      dispatch({ type: "TV_FETCH_ERROR", error: error });
    }
  };
}

export function makeFavorite(item) {
  console.log(item);
  return async function(dispatch) {
    dispatch({ type: "MAKE_FAVORITE", payload: item });
  };
}
