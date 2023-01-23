import { getProductEnv } from "utils";

const GLOBAL_CONSTANT: any = {
  API_STATUS: {
    SUCCESS: 1,
    LOADING: 0,
    FAIL: -1,
  },
  STATUS_REFRESH_API_TIMEOUT: 10000,
  STATUS_REFRESH_API_MAX_COUNT: 60,
  STATUS_CONSTANT: {
    SUCCESS: "Successful",
    FAILED: "Failed",
    FAILURE: "Failed",
    PENDING: "Pending",
    CANCELLED: "Cancelled",
    PARKED: "Successful",
  },
  WROUTE: {
    TNC: "tnc",
    DIGIO: "digio",
    ADD_MONEY: "addMoneyTransactionInit",
  },
  URL_PARAMETER: {
    WROUTE: "wroute",
    TXN_ID: "txnId",
    LATITUDE: "latitude",
    LONGITUDE: "longitude",
    TOKEN: "token",
    VERSION: "version",
  },
};
export default GLOBAL_CONSTANT;
