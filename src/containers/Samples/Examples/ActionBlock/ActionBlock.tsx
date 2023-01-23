//React
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
//Components
import {
  ActionBlock,
  SampleModal,
  Screen,
  TranslatedString,
  Switch,
  BottomTabs,
  Accordion,
  Dropdown,
  Keyboard,
  Modal,
  FlexBox,
  Card,
  Button,
  TitleBlock,
  Input,
  Checkbox,
  Radio,
  RupeeAmount,
  AlertBox,
  SideMenu,
  StatusMark,
  SkeletonLoader,
} from "components";
import {
  fetchBaseApiDetailsApi,
  setGeneralDetails,
  useBaseApiDetails,
} from "Slices";
//Styles
import "./styles.scss";
//Assets
import InfoImg from "assets/icons/info.svg";
import MobileImg from "assets/icons/mobile.svg";
import ChangeLanguageImg from "assets/icons/change-language.svg";
import { ChangeHistory } from "utils";
import { useDispatch } from "react-redux";
const ActionBlockExample = () => {
  return (
    <TitleBlock
      title="Action Block"
      content={
        <ActionBlock
          title={<TranslatedString text="Action Block Title" />}
          icon={InfoImg}
        />
      }
    />
  );
};
export default ActionBlockExample;
