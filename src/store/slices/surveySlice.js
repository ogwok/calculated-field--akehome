import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "survey",
  initialState: {
    survey: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.survey.push({ ...action.payload });
    },

    //add formula
    addOptions: (state, action) => {
      let index = state.survey.findIndex(
        (obj) => obj.id === action.payload.questionId
      );
      state.survey[index].formula = action.payload.lable;
    },

    addOptionsValues: (state, action) => {
      let index = state.options.findIndex(
        (obj) => obj.id === action.payload.optionId
      );
      state.options[index].value = action.payload.value;
    },

    //add content lable
    addRadioValues: (state, action) => {
      let index = state.survey.findIndex(
        (obj) => obj.id === action.payload.questionId
      );
      console.log("slice", action.payload.lable);
      state.survey[index].lable = action.payload.lable;
    },

    addValues: (state, action) => {
      let index = state.survey.findIndex(
        (obj) => obj.id === action.payload.questionId
      );
      state.survey[index].value = action.payload.value;
    },
  },
});

export const surveyReducer = cartSlice.reducer;
export const {
  addToCart,
  addValues,
  addOptions,
  addOptionsValues,
  addRadioValues,
} = cartSlice.actions;
