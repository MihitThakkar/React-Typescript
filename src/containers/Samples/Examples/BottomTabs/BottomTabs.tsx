//React
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
//Components
import {
  ActionBlock,
  TranslatedString,
  BottomTabs,
  TitleBlock,
} from "components";
//Styles
import "./styles.scss";
//Assets
import InfoImg from "assets/icons/info.svg";

const BottomTabsExample = () => {
  //Constants
  const [bottomTabsVisibility, setBottomTabsVisibility] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <TitleBlock
      title="Bottom Tabs"
      content={
        <>
          <ActionBlock
            title={<TranslatedString text="Show Bottom Tabs" />}
            icon={InfoImg}
            onClick={() => {
              setBottomTabsVisibility(!bottomTabsVisibility);
            }}
            className="mr-t-20"
          />
          {bottomTabsVisibility && (
            <BottomTabs
              tabSelected={activeTab}
              tabSelectionCallback={(tab) => {
                setActiveTab(tab);
              }}
              theme={localStorage.getItem("theme") || "dark"}
            />
          )}
        </>
      }
    />
  );
};

export default BottomTabsExample;
