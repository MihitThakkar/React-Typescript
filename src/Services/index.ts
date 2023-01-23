import { Get, Post } from "Api";
import { apiConstant } from "../constants";

//********************** =-=-=-=-=-=-=-=-= Sample Api -=-=-=-=-=-=-=-=-=-=- **********************//

/**
 * Post API
 */
export const fetchBaseApiDetails = async (
  method: string,
  payload?: any
): Promise<string> =>
  method === "GET"
    ? Get<string>(apiConstant.URL.MOCK, apiConstant.PATH.BASE_API)
    : Post<string>(apiConstant.URL.MOCK, apiConstant.PATH.BASE_API, payload);

/**
 * Get API
 */
export const fetchGetBaseApiDetails = async (
  payload?: string
): Promise<string> =>
  Post<string>(apiConstant.URL.MOCK, apiConstant.PATH.BASE_API, payload);
