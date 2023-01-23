import enLangConstant from "./en-lang";
import hiLangConstant from "./hi-lang";
import knLangConstant from "./kn-lang";
import tlLangConstant from "./tl-lang";
import mrLangConstant from "./mr-lang";
import guLangConstant from "./gu-lang";
const LOCALE_STRING_CONSTANT: any = {
  en: enLangConstant,
  hi: hiLangConstant,
  kn: knLangConstant,
  tl: tlLangConstant,
  mr: mrLangConstant,
  gu: guLangConstant,
};

export const languages = [
  {
    title: "English",
    subTitle: "English",
    shortName: "en",
  },
  {
    title: "ગુજરાતી",
    subTitle: "Gujarati",
    shortName: "gu",
  },
  {
    title: "हिंदी",
    subTitle: "Hindi",
    shortName: "hi",
  },
  {
    title: "मराठी",
    subTitle: "Marathi",
    shortName: "mr",
  },
  {
    title: "ಕನ್ನಡ",
    subTitle: "Kannada",
    shortName: "kn",
  },
  {
    title: "తెలుగు",
    subTitle: "Telugu",
    shortName: "tl",
  },
];

export default LOCALE_STRING_CONSTANT;
