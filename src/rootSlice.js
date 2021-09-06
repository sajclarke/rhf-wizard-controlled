import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  base: "",
  crust: "",
  sauce: "",
  cheese: "",
};

const rootSlice = createSlice({
  name: "root",
  initialState: initialState,
  reducers: {
    resetForm: (state) => initialState,
    chooseBase: (state, action) => {
      state.base = action.payload;
    },
    chooseCrust: (state, action) => {
      state.crust = action.payload;
    },
    chooseSauce: (state, action) => {
      state.sauce = action.payload;
    },
    chooseCheese: (state, action) => {
      state.cheese = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;

export const { resetForm, chooseBase, chooseCheese, chooseCrust, chooseSauce } =
  rootSlice.actions;
