import axios from "../http";

function getPosts() {
  return axios.get("/posts");
}

export default {
  getPosts,
};

export { getPosts };
