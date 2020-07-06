import axios from "../http";

function getPosts(payload) {
  return axios.get(`/posts?page=${payload.page}`, {
    params: { sortBy: payload.sortBy },
  });
}

function getPostsBySearchTerm(payload) {
  return axios.get(`/posts/search?term=${payload}`);
}

function getPost(payload) {
  return axios.get(`/posts/${payload}`);
}

export default {
  getPosts,
  getPost,
  getPostsBySearchTerm,
};

export { getPosts, getPost, getPostsBySearchTerm };
