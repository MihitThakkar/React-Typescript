import getProductEnv from "utils/getProductEnv";
/**
 * App Configuration based on env && __DEV__
 */
const versionNumber = 1;
const projectName = "React-Typescript";

const config: any = {
  env: process.env.NODE_ENV || "uat",
  STAGE: {
    mock: "http://demo5074490.mockable.io/",
    versionNumber: versionNumber,
    projectName: projectName,
  },
  QA: {
    mock: "http://demo5074490.mockable.io/",
    versionNumber: versionNumber,
    projectName: projectName,
  },
  DEV: {
    mock: "http://demo5074490.mockable.io/",
    versionNumber: versionNumber,
    projectName: projectName,
  },
  PROD: {
    mock: "http://demo5074490.mockable.io/",
    versionNumber: versionNumber,
    projectName: projectName,
  },
};
let configs: any = config[getProductEnv()];
//Project Environment
export const env = config.env;

//Config
export default configs;
