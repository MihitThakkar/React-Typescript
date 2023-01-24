import BlackShare from "assets/icons/black-share.svg";
import BlackFaq from "assets/icons/black-faq.svg";
import BlackStatement from "assets/icons/black-statement.svg";
import BlackHelp from "assets/icons/black-help.svg";
import BlackDocument from "assets/icons/black-document.svg";
import BlackStar from "assets/icons/black-star.svg";
import BlackTnc from "assets/icons/black-tnc.svg";
import BlackInfo from "assets/icons/black-info.svg";
import Logout from "assets/icons/logout.png";
import { globalConstant } from ".";
import ROUTE_PATH from "Routes/paths";

export const SIDE_MENU_CUSTOM_ACTIONS = {
  REFER: "refer action",
  EMAIL: "email action",
  SCHEME: "scheme action",
  RATE: "rate action",
  LOGOUT: "logout action",
  REST_MPIN: "reset-mpin action",
};

const sideMenuList = [
  // {
  //   img: BlackShare,
  //   text: "Refer to your friends",
  //   onClick: SIDE_MENU_CUSTOM_ACTIONS.REFER,
  // },
  {
    img: BlackFaq,
    text: "FAQs",
    onClick: ROUTE_PATH.GENERAL.FAQ,
  },
  {
    img: BlackTnc,
    text: "Terms and Conditions",
    onClick: ROUTE_PATH.GENERAL.TNC,
  },
  {
    img: Logout,
    text: "Logout",
    onClick: SIDE_MENU_CUSTOM_ACTIONS.LOGOUT,
  },
];
export default sideMenuList;
