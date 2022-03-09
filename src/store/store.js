import { createStore } from "redux";
import { loginReducer } from "./login/reducers";
import rootReducer from "./reducers";

export const store = createStore(rootReducer);
