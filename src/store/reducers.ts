import { combineReducers } from "redux";
import { loginReducer } from "./login/reducers";

// const combineReducers = (reducers) => {
//   return (state = {}, action) => {
//     return Object.keys(reducers).reduce((nextState, key) => {
//       nextState[key] = reducers[key](state[key], action);
//       return nextState;
//     }, {});
//   };
// };

const reducers =  combineReducers({
  // auth: authReducer,
  login: loginReducer
});

export default reducers
export type RootState = ReturnType< typeof reducers>

const arr = [1, 2, 3, 4, 5];

const result = arr.reduce(function (sum, current) {
  return sum + current;
}, 0);

console.log(result);
