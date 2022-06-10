import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
// import { loginReducer } from "./login/reducers";
import rootReducer from "./reducers.ts";

export const store = createStore(rootReducer, {}, applyMiddleware(thunk));
