import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";


import thunk from "redux-thunk"
import rootReducer from "../Reducers/rootReducer";
// import { setCurrentUser, setToken } from "../Actions/AuthActions";


const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(thunk)
  )
);

// if (localStorage.user) {
//   const user = JSON.parse(localStorage.user)
//   store.dispatch(setCurrentUser(user));

// }
// if (localStorage.Token) {
//   const token = JSON.parse(localStorage.Token)
//   store.dispatch(setToken(token));

// }


export default store;