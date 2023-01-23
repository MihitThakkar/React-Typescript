import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { msgConstants } from "../constants";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchBaseApiDetails } from "Services";
import { IAPI_ACTION, IDispatcherType, INITIAL_STATE } from "types";
import store from "store";

export const setAPIError = (
  state: ReturnType<typeof INITIAL_STATE>,
  action: IAPI_ACTION
): void => {
  state.loading = false;
  state.error = action.error.message || msgConstants.SOMETHING_WRONG;
  toast.error(state.error);
};

export const baseApiDetails = createAsyncThunk(
  "baseApiDetails",
  fetchBaseApiDetails
);

export const baseApiDetailsSlice = createSlice({
  name: "baseApiDetails",
  initialState: INITIAL_STATE(),
  reducers: {
    CLEAR_ERROR: (state: any) => {
      state.error = "";
    },
    RESET: (state) => Object.assign(state, INITIAL_STATE()),
    setBaseApiDetails: (
      state = INITIAL_STATE(),
      action: PayloadAction<any>
    ) => {
      return { ...action.payload };
    },
  },
  extraReducers: {
    [baseApiDetails.pending.toString()]: (
      state: ReturnType<typeof INITIAL_STATE>
    ) => {
      state.data = {};
      state.loading = true;
    },
    [baseApiDetails.rejected.toString()]: setAPIError,
    [baseApiDetails.fulfilled.toString()]: (
      state: ReturnType<typeof INITIAL_STATE>,
      action: IAPI_ACTION<any>
    ) => {
      state.loading = false;
      state.data = action.payload;
      state.isFetched = true;
    },
  },
});

export const baseApiDetailsSelector = (state: any) => {
  return state[baseApiDetailsSlice.name] || {};
};

export const useBaseApiDetails = (): any => useSelector(baseApiDetailsSelector);

export const fetchBaseApiDetailsApi = (method: string) => async (
  dispatch: IDispatcherType
): Promise<void> => {
  await dispatch(baseApiDetails(method));
  return;
};

export const setBaseApiDetails = (action: any): void => {
  store.dispatch(baseApiDetailsSlice.actions.setBaseApiDetails(action));
};
