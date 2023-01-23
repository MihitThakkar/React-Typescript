// Is iOS
const userAgent = navigator.userAgent.toLowerCase();
const isIOS =
  !(userAgent.indexOf("chrome") > -1) ||
  [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod",
  ].includes(navigator.platform) ||
  // iPad on iOS 13 detection
  (navigator.userAgent.includes("Mac") && "ontouchend" in document);
export default isIOS;
