import axios from "../http";

function postPost(payload) {
  return axios.post("/posts", payload);
}

export default {
  postPost,
};

export { postPost };
