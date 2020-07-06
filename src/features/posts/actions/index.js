export const getPosts = (payload) => {
  return {
    type: "GET_POSTS_REQUEST",
    payload,
  };
};

export const getPostsBySearchTerm = (payload) => {
  return {
    type: "GET_POSTS_BY_SEARCH_TERM_REQUEST",
    payload,
  };
};

export const getPost = (payload) => {
  return {
    type: "GET_POST_REQUEST",
    payload,
  };
};

export const postPost = (payload) => {
  return {
    type: "CREATE_POST_REQUEST",
    payload,
  };
};

export const postComment = (payload) => {
  return {
    type: "CREATE_COMMENT_REQUEST",
    payload,
  };
};
