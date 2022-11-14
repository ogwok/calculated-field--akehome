import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "survey",
  initialState: {
    survey: [],
    options: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // eslint-disable-next-line no-unused-expressions

      state.survey.push({ ...action.payload });
    },

    //add formula
    addOptions: (state, action) => {
      let index = state.survey.findIndex(
        (obj) => obj.id === action.payload.questionId
      );

      console.log("slice", action.payload.lable);
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

    addLabel: (state, action) => {
      // let index = state.survey.findIndex(
      //   (obj) => obj.id === action.payload.questionId
      // );
      // state.survey[index].value = action.payload.lable;
    },

    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.survey = removeItem;
    },
  },
});

export const surveyReducer = cartSlice.reducer;
export const {
  addToCart,
  removeItem,
  addValues,
  addOptions,
  addOptionsValues,
  addRadioValues,
  addLable,
} = cartSlice.actions;
