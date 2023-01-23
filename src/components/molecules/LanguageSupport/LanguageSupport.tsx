import BlueTick from "assets/icons/blue-success.svg";
import cx from "classnames";
import { Card, FlexBox, Footer, Header } from "components";
import { languages } from "constants/langConstant";
import React, { useContext } from "react";
import { LanguageContext } from "utils";
import "./styles.scss";
import { LanguageSupportProps } from "./types";
const LanguageSupport: React.FC<LanguageSupportProps> = ({
  visible,
  onClose,
}) => {
  const [lang, setActiveLang] = useContext(LanguageContext);

  return (
    <div className={cx(visible ? "h-100 " : "h-0", "language-support")}>
      <Header pageName={"Select Language"} customBackAction={onClose} />
      <Card className="languages">
        <p className="text-center fs-18 font-heavy">
          Preferred Language / भाषा चुनिए
        </p>
        <div className="language-list mr-t-25">
          {languages.map((item, index) => {
            const isActiveLang = item["shortName"] === lang;
            const subTitle = isActiveLang ? "Default" : item["subTitle"];
            return (
              <FlexBox
                className={cx(
                  isActiveLang && "active-lang",
                  "lang-names pd-20 border-bottom clicking-animation"
                )}
                key={"lang-" + index}
                justifyBetween
                alignCenter
                onClick={() => {
                  window.localStorage.setItem("activeLang", item["shortName"]);
                  setActiveLang(item["shortName"]);
                }}
              >
                <div className="name">
                  <p
                    className={cx(
                      isActiveLang && "clr-theme",
                      "lang-title fs-16 bold-900"
                    )}
                  >
                    {item["title"]}
                  </p>
                  <p
                    className={cx(
                      isActiveLang && "italic",
                      "lang-sub-title fs-14 font-light"
                    )}
                  >
                    {subTitle}
                  </p>
                </div>
                {isActiveLang && (
                  <img alt="img" loading="lazy" src={BlueTick} />
                )}
              </FlexBox>
            );
          })}
        </div>
      </Card>
      <Footer buttonText="Confirm" buttonAction={onClose} />
    </div>
  );
};
export default LanguageSupport;
