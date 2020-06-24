const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_POSTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case " GET_POSTS_SUCCESS":
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false,
        error: false,
      };
    case "GET_POSTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
