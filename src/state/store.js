import { createStore } from "redux";

import rootReducer from "../state/rootReducer";

const store = createStore(rootReducer);

export default store;
