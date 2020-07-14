import axios from "../http";

function getPosts(payload) {
  console.log("payload u queries", payload);
  return axios.get(`/posts`, {
    params: {
      page: payload.page,
      sortBy: payload.sortBy,
    },
  });
}

function getPostsBySearchTerm(payload) {
  console.log("payload u queries", payload);
  return axios.get(`/posts/search`, {
    params: {
      page: payload.page,
      searchTerm: payload.searchTerm,
      sortBy: payload.sortBy,
    },
  });
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
