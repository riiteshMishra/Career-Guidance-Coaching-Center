import { configureStore } from "@reduxjs/toolkit";
import UiReducer from "./Features/Theme/Ui";

const store = configureStore({
  reducer: {
    ui: UiReducer,
  },
});

export default store;
