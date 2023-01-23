import cx from "classnames";
import { ActionBlock, Header, TranslatedString, LogoutModal } from "components";
import {
  globalConstant,
  sideMenuList,
  SIDE_MENU_CUSTOM_ACTIONS,
} from "../../../constants";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import { SideMenuProps } from "./types";
import { ChangeHistory, nameFunctions } from "utils";
const SideMenu: React.FC<SideMenuProps> = ({ isOpened, menuCloseCallback }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [logoutModalVisibility, setLogoutModalVisibility] = useState(false);

  const returnActionBlock = (item: any, index: number) => {
    return (
      <ActionBlock
        key={index}
        onClick={() => {
          console.log(item["text"]);
          if (item["onClick"].includes("/"))
            ChangeHistory("push", item["onClick"]);
          else
            switch (item["onClick"]) {
              case SIDE_MENU_CUSTOM_ACTIONS.LOGOUT:
                setLogoutModalVisibility(true);
                break;

              default:
                break;
            }
        }}
        icon={item["img"]}
        title={item["text"]}
        className="no-shadow pd-h-0 pd-v-20 animated fadeInRight"
      />
    );
  };
  return (
    <div className={cx(isOpened && "side-menu-opened", "side-menu")}>
      <Header
        hasLogo
        hamBurgerMenuClickCallback={() => {
          setIsMenuOpened(!isMenuOpened);
          menuCloseCallback && menuCloseCallback(false);
        }}
        isSideMenuOpened={true}
        hasSideMenu
      />
      <div className="side-menu-options">
        {sideMenuList?.map(returnActionBlock)}
      </div>
      <LogoutModal
        visible={logoutModalVisibility}
        onClose={() => {
          setLogoutModalVisibility(false);
        }}
        logoutAction={() => {
          //logout action
        }}
      />
    </div>
  );
};
export default SideMenu;
