//React
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
//Components
import { ActionBlock, TranslatedString, Switch, TitleBlock } from "components";
//Styles
import "./styles.scss";
//Assets
import MobileImg from "assets/icons/mobile.svg";

const ChangeThemeExample = () => {
  const [activeSwitch, setActiveSwitch] = useState(false);

  return (
    <TitleBlock
      title="Dark / Light Theme"
      content={
        <ActionBlock
          title={<TranslatedString text="Change Theme" />}
          icon={MobileImg}
          className="mr-t-20"
          rightContent={
            <Switch
              activeSwitch={activeSwitch}
              switchCallback={() => {
                const theme =
                  localStorage.getItem("theme") === "dark" ? "light" : "dark";
                localStorage.setItem("theme", theme);
                setActiveSwitch(localStorage.getItem("theme") === "dark");
                document.body.setAttribute("data-theme", theme);
              }}
            />
          }
        />
      }
    />
  );
};

export default ChangeThemeExample;
