import { createSlice } from "@reduxjs/toolkit";

const signUpStep = createSlice({
  name: "signupSteps",
  initialState: {
    step: 1,
  },
  reducers: {
    incrementStep: (state, action) => {
      if (state.step >= 1 && state.step < 4) {
        state.step += 1;
      }
    },
    decrementStep: (state, action) => {
      if (state.step > 1 && state.step <= 4) {
        state.step -= 1;
      }

      // if (action) {
      //   state.step = action.payload;
      // }
    },
    changeStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { incrementStep, decrementStep, changeStep } = signUpStep.actions;
export default signUpStep.reducer;
