
const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  value: 0,
  age: 17,
};

//reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "ADD_AGE") {
    return {
      ...state,
      age: state.age + 1,
    };
  }

  if (action.type === "ADD_API") {
    return {
      ...state,
      value: state.value + 1,
    };
  }
  return state;
};

//store
const store = createStore(rootReducer);
console.info(store.getState());

//subcription
store.subscribe(() => {
    console.info("store change : " , store.getState());
})

//dispatch
store.dispatch({ type: "ADD_API" });
store.dispatch({type: "ADD_AGE"});
console.info(store.getState());

