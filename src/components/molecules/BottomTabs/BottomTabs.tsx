import MenuImg from "assets/icons/menu.svg";
import TabsBackgroundBlackImg from "assets/bottom-tab-bg.png";
import cx from "classnames";
import { FlexBox } from "components";
import React from "react";
import "./styles.scss";
import { BottomTabsProps } from "./types";
const BottomTabs: React.FC<BottomTabsProps> = ({
  className,
  tabSelected,
  tabSelectionCallback,
  theme,
}) => {
  return (
    <FlexBox className={cx(className, "bottom-tabs fadeInUp w-100")}>
      <img
        alt="img"
        loading="lazy"
        className="background-img"
        src={TabsBackgroundBlackImg}
      />
      <FlexBox
        justifyCenter
        alignCenter
        className={cx(
          tabSelected === "Home" && "active-tab",
          "tabs fadeInUp w-100"
        )}
        onClick={() => {
          // tabSelectionCallback("Home");
        }}
      >
        <img
          alt="img"
          loading="lazy"
          src={MenuImg}
          className="bottom-tabs-img clicking-animation"
        />
      </FlexBox>
      <FlexBox
        justifyCenter
        alignCenter
        className={cx("center-img tabs fadeInUp w-100")}
        onClick={() => {
          tabSelectionCallback("QR");
        }}
      >
        <img
          alt="img"
          loading="lazy"
          src={MenuImg}
          className="clicking-animation w-45"
        />
      </FlexBox>
      <FlexBox
        justifyCenter
        alignCenter
        className={cx(
          tabSelected === "Profile" && "active-tab",
          "tabs fadeInUp w-100"
        )}
        onClick={() => {
          tabSelectionCallback("Profile");
        }}
      >
        <img
          alt="img"
          loading="lazy"
          src={MenuImg}
          className="bottom-tabs-img clicking-animation"
        />
      </FlexBox>
    </FlexBox>
  );
};
export default BottomTabs;
