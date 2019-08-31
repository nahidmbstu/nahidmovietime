const initialState = {
  shows: [],
  isFetching: false,
  error: null
};

export function TVReducer(state = initialState, action) {
  switch (action.type) {
    case "TV_FETCHING_STARTED":
      return {
        ...state,
        isFetching: true
      };
    case "TV_FETCH_SUCCESS":
      return {
        ...state,
        isFetching: false,
        shows: action.payload
      };
    case "TV_FETCH_ERROR":
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}
