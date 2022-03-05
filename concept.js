// import { createStore } from "redux";
const Redux = require("redux");

const initState = {
  title: "iPhone",
  description: "A smartphone made by Apple"
};

function reducer(state = initState, action) {
  switch (action.type) {
    case "CHANGE_TITLE":
      return { ...state, title: action.payload };

    case "CHANGE_DESCRIPTION":
      return { ...state, description: action.payload };
  }
  return state;
}

const store = Redux.createStore(reducer);

const changeTitle = {
  type: "CHANGE_TITLE",
  payload: "Apple Watch"
};

const changeDescription = {
  type: "CHANGE_DESCRIPTION",
  payload: "A wearable smartwatch"
};

store.subscribe(() => console.log(store.getState()));

// console.log(store.getState());

store.dispatch(changeTitle);

// console.log(store.getState());

store.dispatch(changeDescription);

// console.log(store.getState());
