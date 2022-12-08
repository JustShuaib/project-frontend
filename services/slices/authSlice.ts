import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "login",
  initialState: {
    token: "",
    redirect: "",
  },
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      let redirectTo = state.redirect;
      if (redirectTo === "") redirectTo = "/";

      state.redirect = "";
      window.location.href = redirectTo;
    },

    setRedirectLink: (state, action: PayloadAction<{ goto: string }>) => {
      state.token = "";
      state.redirect = action.payload.goto;
    },

    removeToken: (state) => {
      state.token = "";
    },
  },
});

export const { setToken, setRedirectLink, removeToken } = authSlice.actions;
export default authSlice.reducer;
