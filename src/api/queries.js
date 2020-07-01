import axios from "../http";

function getPosts() {
  return axios.get("/posts");
}

function getPost(payload) {
  return axios.get(`/posts/${payload}`);
}

export default {
  getPosts,
  getPost,
};

export { getPosts, getPost };
