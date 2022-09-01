import { combineReducers } from "redux";
import { reducer as loaderReducer } from "./loader";
import { reducer as errorReducer } from "./error";
import { reducer as authReducer } from "./auth";

const rootReducer = combineReducers({
  loader: loaderReducer,
  error: errorReducer,
  auth: authReducer,
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
