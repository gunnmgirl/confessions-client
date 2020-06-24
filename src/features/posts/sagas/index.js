import { call, put, takeLatest } from "redux-saga/effects";

import queries from "../../../api/queries";

function* getPosts(action) {
  try {
    const data = yield call(queries.getPosts);
    const posts = data.data.posts;
    yield put({ type: "GET_POSTS_SUCCESS", payload: posts });
  } catch (error) {
    yield put({ type: "GET_POSTS_FAILURE", error });
  }
}

const saga = function* () {
  yield takeLatest("GET_POSTS_REQUEST", getPosts);
  // yield takeLatest("CREATE_POST_REQUEST", createPost);
};

export default saga;
