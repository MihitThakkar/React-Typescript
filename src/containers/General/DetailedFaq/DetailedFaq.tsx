//React
import React, { useEffect } from "react";
import cx from "classnames";
//Components
import {
  Accordion,
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
import { setGeneralDetails, useGeneralDetails } from "Slices";
const FAQ = () => {
  //Slices
  const generalDetails = useGeneralDetails();

  //Render UI
  const renderDetailedFaqs = (item: any, index: number) => {
    return (
      <Accordion
        title={<TranslatedString text={item?.title} />}
        content={item.content}
        className={cx(index !== 0 && "mr-t-20")}
        key={`${generalDetails?.detailedFaq.title}-detailed-faq-${index}`}
      />
    );
  };

  //Return UI
  return (
    <Screen
      className="faqs-screen"
      headerDetails={{
        pageName: (
          <TranslatedString text={generalDetails?.detailedFaq?.title} />
        ),
      }}
    >
      {generalDetails?.detailedFaq?.faqs?.map(renderDetailedFaqs)}
    </Screen>
  );
};

export default FAQ;
