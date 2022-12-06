import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "login",
  initialState: {
    token: "",
    redirect: "",
    // user: {},
  },
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      let redirectTo = state.redirect;
      if (redirectTo === "/login" || redirectTo === "/signup") {
        redirectTo = "/";
      }
      state.redirect = "";
      window.location.href = redirectTo;
    },

    setRedirectLink: (state, action: PayloadAction<{ goto: string }>) => {
      state.token = "";
      state.redirect = action.payload.goto;
    },
  },
});

export const { setToken, setRedirectLink } = authSlice.actions;
export default authSlice.reducer;
