const INITIAL_STATE = {
  posts: [],
  post: {
    text: "",
    upvotes: 0,
    downvotes: 0,
    comments: [],
  },
  loading: false,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SORT_BY_LATEST":
      return {
        ...state,
        posts: state.posts.concat().sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        }),
      };
    case "SORT_BY_POPULAR":
      return {
        ...state,
        posts: state.posts.concat().sort(function (a, b) {
          return b.upvotes - a.upvotes;
        }),
      };
    case "SORT_BY_RANDOM":
      return {
        ...state,
        posts: state.posts.concat().sort(),
      };
    case "GET_POSTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "GET_POSTS_SUCCESS":
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        loading: false,
        error: false,
      };
    case "GET_POSTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "CREATE_POST_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "CREATE_POST_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "CREATE_POST_SUCCESS":
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false,
        error: false,
      };
    case "GET_POST_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "GET_POST_SUCCESS":
      return {
        ...state,
        post: action.payload,
        loading: false,
        error: false,
      };
    case "GET_POST_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "CREATE_COMMENT_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "CREATE_COMMENT_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "CREATE_COMMENT_SUCCESS":
      return {
        ...state,
        post: {
          ...state.post,
          comments: [...state.post.comments, action.payload.content],
        },
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
