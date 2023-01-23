import HomeImg from "assets/card.svg";
import ProfileImg from "assets/icons/menu.svg";
import QrScan1Img from "assets/qr-scan.png";
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
          src={HomeImg}
          className="w-15 clicking-animation"
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
          src={QrScan1Img}
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
          src={ProfileImg}
          className="w-15 clicking-animation"
        />
      </FlexBox>
    </FlexBox>
  );
};
export default BottomTabs;
