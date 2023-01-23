//React
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
//Components
import { ActionBlock, TranslatedString, TitleBlock } from "components";
import { setGeneralDetails } from "Slices";
//Styles
import "./styles.scss";
//Assets
import ChangeLanguageImg from "assets/icons/change-language.svg";

const MultipleLanguageExample = () => {
  return (
    <TitleBlock
      title="Multiple Languages"
      content={
        <ActionBlock
          title={<TranslatedString text="Change Language" />}
          icon={ChangeLanguageImg}
          onClick={() => {
            setGeneralDetails({
              showChangeLanguageScreen: true,
            });
          }}
          className="mr-t-20"
        />
      }
    />
  );
};

export default MultipleLanguageExample;
