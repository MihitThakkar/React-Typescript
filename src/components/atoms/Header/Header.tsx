//React
//Assets
import BackButtonDark from "assets/icons/back-dark.svg";
import BackButtonLight from "assets/icons/back-light.svg";
import HamBurgerMenuImg from "assets/icons/hamburger.svg";
import CrossImg from "assets/icons/cross.svg";
import Logo from "assets/logo.png";
//Libraries
import cx from "classnames";
//Components
import { FlexBox } from "components";
import React, { useEffect } from "react";
//Utils
import { ChangeHistory } from "utils";
//Styles
import "./styles.scss";
import { HeaderProps } from "./types";
import { setGeneralDetails, useGeneralDetails } from "Slices";
const Header: React.FC<HeaderProps> = ({
  className,
  pageName,
  otherDetails,
  backActionToCloseDeepLink,
  customBackAction,
  hamBurgerMenuClickCallback,
  hasLogo,
  isSideMenuOpened,
  hasSideMenu,
  hideBackButton,
}) => {
  //Slices
  const generalDetails = useGeneralDetails();

  const goBack = () => {
    if (customBackAction) {
      customBackAction();
    } else {
      ChangeHistory("back");
    }
  };

  return (
    <div className={cx("header pd-20", className)} id="header">
      {hasLogo ? (
        <FlexBox justifyBetween alignCenter>
          {pageName || (
            <img
              alt="img"
              loading="lazy"
              src={Logo}
              className={cx("logo-img")}
            />
          )}
          {hasSideMenu && (
            <img
              alt="img"
              loading="lazy"
              src={isSideMenuOpened ? CrossImg : HamBurgerMenuImg}
              className={cx("hamburger-img clicking-animation")}
              onClick={hamBurgerMenuClickCallback}
            />
          )}
        </FlexBox>
      ) : (
        <FlexBox alignCenter className="page-heading">
          {!hideBackButton && (
            <img
              alt="img"
              loading="lazy"
              className="clicking-animation back-img"
              onClick={() => goBack()}
              src={
                generalDetails.theme === "dark"
                  ? BackButtonLight
                  : BackButtonDark
              }
            />
          )}
          <div className={"fs-18 font-heavy"}>{pageName}</div>
        </FlexBox>
      )}
      {otherDetails}
    </div>
  );
};

export default Header;
