const initialState = {
  favorites: []
};

export function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case "MAKE_FAVORITE":
      let list = [...state.favorites, action.payload];

      return {
        ...state,
        favorites: list
      };
    default:
      return state;
  }
}
