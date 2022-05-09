import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import AuthReducer from "./login/reducer";
import { composeWithDevTools } from "redux-devtools-extension"

const RootReducers = combineReducers({
  // Reducers,
  AuthReducer,
});

export const store = createStore(
  RootReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

// export store;