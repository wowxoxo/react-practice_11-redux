import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
// import { loginReducer } from "./login/reducers";
import rootReducer from "./reducers";

export const store = createStore(rootReducer, {}, applyMiddleware(thunk));
