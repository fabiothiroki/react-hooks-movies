export const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    default:
      return state;
  }
};