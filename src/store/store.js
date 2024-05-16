import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
const store = configureStore({
  reducer: rootReducer,
});
const { dispatch } = store;
export { store, dispatch };
