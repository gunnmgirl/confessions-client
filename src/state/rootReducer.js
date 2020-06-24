import { combineReducers } from "redux";

import posts from "../features/posts/reducers";

const rootReducer = combineReducers({
  posts,
});

export default rootReducer;
