//React
import React, { useEffect } from "react";
import cx from "classnames";
//Components
import {
  ActionBlock,
  Button,
  Card,
  Screen,
  TranslatedString,
} from "components";
//Constants
import { faqs } from "../../../constants";
//Utils
import { ChangeHistory } from "utils";
//Styles
import "./styles.scss";
//Slices
import { setGeneralDetails } from "Slices";
import ROUTE_PATH from "Routes/paths";
const FAQ = () => {
  //Render UI
  const renderFaqTitle = (item: any, index: number) => {
    const maxLength = Object.entries(faqs).length;
    const title = item[0];
    const icon = item[1].img;
    const detailedFaqs = item[1].faqs;
    return (
      <ActionBlock
        icon={icon}
        title={title}
        className={cx(index < maxLength - 1 && "border-bottom", "no-shadow")}
        onClick={() => {
          setGeneralDetails({
            detailedFaq: {
              title,
              faqs: detailedFaqs,
            },
          });
          ChangeHistory("push", ROUTE_PATH.GENERAL.DETAILED_FAQ);
        }}
      />
    );
  };

  //Return UI
  return (
    <Screen
      className="faqs-screen"
      headerDetails={{
        pageName: <TranslatedString text="FAQs" />,
      }}
    >
      <Card className="pd-0">{Object.entries(faqs).map(renderFaqTitle)}</Card>
    </Screen>
  );
};

export default FAQ;
