//Toolkit
import {
  configureStore,
  Reducer,
  combineReducers,
  Slice,
} from "@reduxjs/toolkit";

//Slices
import { generalDetailsSlice, baseApiDetailsSlice } from "Slices";

interface ISimpleMap {
  [field: string]: Reducer;
}

const reducerMap: ISimpleMap = {
  [generalDetailsSlice.name]: generalDetailsSlice.reducer,
  [baseApiDetailsSlice.name]: baseApiDetailsSlice.reducer,
};

const store = configureStore({
  reducer: combineReducers(reducerMap),
});

export const registerSlice = (slice: Slice): void => {
  reducerMap[slice.name] = slice.reducer;
  store.replaceReducer(combineReducers(reducerMap));
};

export default store;
