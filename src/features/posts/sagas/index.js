import { call, put, takeLatest } from "redux-saga/effects";

import queries from "../../../api/queries";
import mutatios from "../../../api/mutations";

function* getPosts(action) {
  try {
    const data = yield call(queries.getPosts);
    const posts = data.data;
    yield put({ type: "GET_POSTS_SUCCESS", payload: posts });
  } catch (error) {
    yield put({ type: "GET_POSTS_FAILURE", error });
  }
}

function* createPost(action) {
  try {
    const result = yield call(mutatios.postPost, action.payload);
    yield put({ type: "CREATE_POST_SUCCESS", payload: result.data });
  } catch (error) {
    yield put({ type: "CREATE_POST_FAILURE", error });
  }
}

const saga = function* () {
  yield takeLatest("GET_POSTS_REQUEST", getPosts);
  yield takeLatest("CREATE_POST_REQUEST", createPost);
};

export default saga;
