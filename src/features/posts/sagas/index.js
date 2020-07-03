import { call, put, takeLatest } from "redux-saga/effects";

import queries from "../../../api/queries";
import mutatios from "../../../api/mutations";

function* getPosts(action) {
  try {
    const data = yield call(queries.getPosts, action.payload);
    const posts = data.data;
    yield put({ type: "GET_POSTS_SUCCESS", payload: posts });
  } catch (error) {
    yield put({ type: "GET_POSTS_FAILURE", error });
  }
}

function* getPost(action) {
  try {
    const data = yield call(queries.getPost, action.payload);
    const post = data.data;
    yield put({ type: "GET_POST_SUCCESS", payload: post });
  } catch (error) {
    yield put({ type: "GET_POST_FAILURE", error });
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

function* createComment(action) {
  try {
    const result = yield call(mutatios.postComment, action.payload);
    console.log("result u sagi", result);
    yield put({ type: "CREATE_COMMENT_SUCCESS", payload: result.data });
  } catch (error) {
    yield put({ type: "CREATE_COMMENT_FAILURE", error });
  }
}

const saga = function* () {
  yield takeLatest("GET_POSTS_REQUEST", getPosts);
  yield takeLatest("GET_POST_REQUEST", getPost);
  yield takeLatest("CREATE_POST_REQUEST", createPost);
  yield takeLatest("CREATE_COMMENT_REQUEST", createComment);
};

export default saga;
