import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  CancelToken,
} from "axios";
import configs from "config";
import { globalConstant, msgConstants } from "../constants";
import { showLoader, removeLoader } from "components";
import { IError } from "../types";
import { toast } from "react-toastify";
import { ChangeHistory, history } from "utils";
import ROUTE_PATH from "Routes/paths";

const Request = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});

const serializeError = (error: AxiosError): IError => {
  const se = {} as IError;
  const { response } = error;
  if (!response) throw error;
  const { status, statusText, data } = response;
  const { message } = data;
  se.name = "API ERROR";
  let errorMsg = "";
  try {
    errorMsg = JSON.parse(message).error.msg;
  } catch (e) {
    errorMsg = message;
  }
  se.message = errorMsg || statusText || `API FAILED (${status})`;
  se.code = status.toString();
  se.stack = JSON.stringify(error.toJSON());
  se.data = data?.data;
  return se;
};

const tokenHeaderInterceptor = (
  config: AxiosRequestConfig | any
): AxiosRequestConfig => {
  const token = localStorage.getItem("token");
  config.headers = {
    ...config.headers,
    token,
  };
  return config;
};

const onErrorInterceptor = (error: AxiosError): IError => {
  throw serializeError(error);
};

Request.interceptors.request.use(tokenHeaderInterceptor);
Request.interceptors.response.use(undefined, onErrorInterceptor);

interface IAPIResponse<T> {
  status: boolean;
  success: boolean;
  message: string;
  data: T;
}

const getOriginalData = (data: any) => {
  const isObjectPayload = typeof data === "object";
  if (isObjectPayload) {
    const originalData = { ...data };
    delete originalData["callback"];
    delete originalData["hideLoader"];
    delete originalData["hideToast"];
    return originalData;
  }
  return data;
};

const extractor = <T,>(
  response: AxiosResponse<IAPIResponse<T>>,
  payload?: any
) => {
  !payload?.hideLoader && removeLoader();
  const { status, data, statusText, code, message }: any = response;
  if ((status === 401 || code === "401") && !payload.hideToast) {
    if (history.location.pathname.includes("/dashboard")) {
      localStorage.clear();
      ChangeHistory("back", ROUTE_PATH.SAMPLES.LANDING);
    }
    toast.error(message || msgConstants.SOMETHING_WRONG);
  }
  if (data.status !== "SUCCESS" && !payload.hideToast) {
    toast.error(data?.message || msgConstants.SOMETHING_WRONG);
  }
  const finalData = data.data || data;
  payload?.["callback"]?.(finalData);
  return finalData;
};

interface IGetParams {
  [field: string]: string | number;
}

// Api Actions
export const Get = <T,>(
  urlType: string,
  path: string,
  params?: any,
  cancelToken?: CancelToken
): Promise<T> => {
  !params?.hideLoader && showLoader();
  return Request.get<IAPIResponse<T>>(`${configs[urlType] + path}`, {
    params: getOriginalData(params),
    cancelToken,
  })
    .then((data) => extractor(data, params))
    .catch((data) => extractor(data, params));
};

export const Post = <T,>(
  urlType: string,
  path: string,
  payload: any,
  cancelToken?: CancelToken
): Promise<T> => {
  !payload?.hideLoader && showLoader();
  return Request.post<IAPIResponse<T>>(
    `${configs[urlType] + path}`,
    getOriginalData(payload),
    {
      cancelToken,
    }
  )
    .then((data) => extractor(data, payload))
    .catch((data) => extractor(data, payload));
};

export const Put = <T,>(
  urlType: string,
  path: string,
  payload: any,
  cancelToken?: CancelToken
): Promise<T> => {
  !payload?.hideLoader && showLoader();
  return Request.put<IAPIResponse<T>>(
    `${configs[urlType] + path}`,
    getOriginalData(payload),
    {
      cancelToken,
    }
  )
    .then((data) => extractor(data, payload))
    .catch((data) => extractor(data, payload));
};
