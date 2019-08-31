import { combineReducers } from "redux";
import { TVReducer } from "./tvshows";
import { favoritesReducer } from "./favorite";

const initialState = {
  movies: [],
  isFetching: false,
  error: null
};

function MoviesReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHING_STARTED":
      return {
        ...state,
        isFetching: true
      };
    case "FETCH_SUCCESS":
      let { results } = action.payload;
      return {
        ...state,
        isFetching: false,
        movies: [...state.movies, ...results]
      };
    case "FETCH_ERROR":
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  movies: MoviesReducer,
  tvshows: TVReducer,
  favorite: favoritesReducer
});

export default rootReducer;
