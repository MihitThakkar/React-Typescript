const getProductEnv = () => {
  const hostName: string = window.location.hostname;
  const splitHostName: any[] = hostName.split(".");
  const domain: string = splitHostName[splitHostName.length - 1];
  const qaEnv = splitHostName[0]?.includes("qa");
  const devEnv = splitHostName[0]?.includes("dev");
  return domain === "in" ? "PROD" : qaEnv ? "QA" : devEnv ? "DEV" : "STAGE";
};

export default getProductEnv;
