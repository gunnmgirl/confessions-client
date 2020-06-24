import { all, fork } from "redux-saga/effects";

import sagas from "../features/posts/sagas";

export default function* rootSaga() {
  yield all([fork(sagas)]);
}
