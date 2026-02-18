import { createSlice } from "@reduxjs/toolkit";

const appLoading = localStorage.getItem("appLoading")
  ? JSON.parse(localStorage.getItem("appLoading"))
  : true;

const theme = localStorage.getItem("theme") || "light";

const initialState = {
  appLoading,
  theme,
};

const userInterfaceSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // APP LOADING
    setAppLoading: (state, action) => {
      state.appLoading = action.payload;
      localStorage.setItem("appLoading", JSON.stringify(state.appLoading));
    },
    // THEME
    setTheme: (state, action) => {
      state.theme = action.payload;
      JSON.stringify(localStorage.setItem("theme", action.payload));
    },
  },
});

export const { setAppLoading, setTheme } = userInterfaceSlice.actions;

export default userInterfaceSlice.reducer;
