import { createStore } from "redux";

import boardApp from "./reducers";
const store = createStore(boardApp);

export default store;
