import { configureStore } from "@reduxjs/toolkit";
import signUpStep from "../store/signupReducers";

const store = configureStore({
  reducer: {
    signupstep: signUpStep,
  },
});

export default store;
