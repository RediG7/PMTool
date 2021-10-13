import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// set up initial state of application
const initialState = {}; // preloaded state
const middleware = [thunk]; // enhancer

let store;
// config to work with browsers and redux devtools
// specific chrome config, generic for other browsers
if (window.navigator.userAgent.includes("Chrome")) {
  store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware), // we dont have to commit to specific array length, so we can add other middlewares and they will only be part of our store,
      // so if we add another middleware at the middleware array we can.
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware)) // for other browsers that arent chrome and dont have devtools
  );
}

export default store;
