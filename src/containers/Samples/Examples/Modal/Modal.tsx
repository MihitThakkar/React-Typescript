//React
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
//Components
import {
  ActionBlock,
  SampleModal,
  TranslatedString,
  TitleBlock,
} from "components";
//Styles
import "./styles.scss";
//Assets
import InfoImg from "assets/icons/info.svg";

const ModalExample = () => {
  //Constants
  const [sampleModalVisibility, setSampleModalVisibility] = useState(false);

  return (
    <TitleBlock
      title="Modal"
      content={
        <>
          <ActionBlock
            title={<TranslatedString text="Open Modal" />}
            icon={InfoImg}
            onClick={() => {
              setSampleModalVisibility(true);
            }}
            className="mr-t-20"
          />
          <SampleModal
            visible={sampleModalVisibility}
            onClose={() => {
              setSampleModalVisibility(false);
            }}
            action={() => {
              setSampleModalVisibility(false);
            }}
          />
        </>
      }
    />
  );
};

export default ModalExample;
