import axios from "../http";

function postPost(payload) {
  return axios.post("/posts", payload);
}
function postComment(payload) {
  return axios.post("/posts/:id", payload);
}

export default {
  postPost,
  postComment,
};

export { postPost, postComment };
