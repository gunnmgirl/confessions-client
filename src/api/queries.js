import axios from "../http";

function getPosts(payload) {
  return axios.get(`/posts?page=${payload}`);
}

function getPost(payload) {
  return axios.get(`/posts/${payload}`);
}

export default {
  getPosts,
  getPost,
};

export { getPosts, getPost };
