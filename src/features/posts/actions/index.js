export const getPosts = () => {
  return {
    type: "GET_POSTS_REQUEST",
  };
};

export const postPost = (payload) => {
  return {
    type: "CREATE_POST_REQUEST",
    payload,
  };
};
