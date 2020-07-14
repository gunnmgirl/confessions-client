const INITIAL_STATE = {
  posts: [],
  page: 1,
  totalPosts: 0,
  searchTerm: "",
  sortBy: "random",
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
  console.log("akcija u reduceru ", action);
  switch (action.type) {
    case "GET_POSTS_BY_SEARCH_TERM_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
        searchTerm: action.payload.searchTerm,
        page: action.payload.page,
        sortBy: action.payload.sortBy,
      };
    case "GET_POSTS_BY_SEARCH_TERM_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "GET_POSTS_BY_SEARCH_TERM_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        posts: action.payload.filteredPosts,
        totalPosts: action.payload.totalPosts,
        searchTerm: "",
      };
    case "GET_POSTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
        page: action.payload.page,
        sortBy: action.payload.sortBy,
      };
    case "GET_POSTS_SUCCESS":
      return {
        ...state,
        posts: action.payload.posts,
        loading: false,
        error: false,
        totalPosts: action.payload.totalPosts,
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
