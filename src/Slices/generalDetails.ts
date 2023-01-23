import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import store from "store";

const initialState = {};

export const generalDetailsSlice = createSlice({
  name: "generalDetails",
  initialState,
  reducers: {
    setGeneralDetails: (state = initialState, action: PayloadAction<any>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const generalDetailsSelector = (state: any) => {
  return state[generalDetailsSlice.name] || {};
};

export const useGeneralDetails = (): any => useSelector(generalDetailsSelector);

export const setGeneralDetails = (action: any): void => {
  store.dispatch(generalDetailsSlice.actions.setGeneralDetails(action));
};
