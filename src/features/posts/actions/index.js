export const sortByLatest = () => {
  return {
    type: "SORT_BY_LATEST",
  };
};

export const sortByPopular = () => {
  return {
    type: "SORT_BY_POPULAR",
  };
};

export const sortByRandom = () => {
  return {
    type: "SORT_BY_RANDOM",
  };
};

export const getPosts = (payload) => {
  return {
    type: "GET_POSTS_REQUEST",
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
