//React
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
//Components
import { ActionBlock, TranslatedString, TitleBlock } from "components";
//Styles
import "./styles.scss";
//Assets
import InfoImg from "assets/icons/info.svg";

const SideMenuExample = (props: any) => {
  return (
    <TitleBlock
      title="Side Menu"
      content={
        <>
          <ActionBlock
            title={<TranslatedString text="Open Side Menu" />}
            icon={InfoImg}
            onClick={() => {
              props.callback(true);
            }}
            className="mr-t-20"
          />
        </>
      }
    />
  );
};

export default SideMenuExample;
