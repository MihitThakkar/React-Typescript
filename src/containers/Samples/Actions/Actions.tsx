//React
import React, { useEffect, useRef, useState } from "react";
//Libraries
import cx from "classnames";
//Examples
import {
  ApiExample,
  ButtonExample,
  InputExample,
  CheckBoxExample,
  RadioExample,
  NumbersExample,
  StatusMarkExample,
  AlertBoxExample,
  DropdownExample,
  KeyboardExample,
  ActionBlockExample,
  AccordionExample,
  ModalExample,
  BottomTabsExample,
  SideMenuExample,
  MultipleLanguageExample,
  ChangeThemeExample,
  SkeletonLoaderExample,
  SearchExample,
  RangeSliderExample,
  CircularProgressBarExample,
} from "../Examples";
//Components
import { Screen, TranslatedString } from "components";
//Styles
import "./styles.scss";
//Utils
import { ChangeHistory } from "utils";

const TopMargin = (props: any) => (
  <div className="mr-t-20">{props.children}</div>
);

const ActionsPage = () => {
  //Constants
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  //Return UI
  return (
    <Screen
      className="actions-screen"
      headerDetails={{
        pageName: <TranslatedString text="Actions Page" />,
      }}
      footerDetails={{
        buttonText: <TranslatedString text="Done" />,
        buttonAction: () => {
          ChangeHistory("back");
        },
      }}
      customSideMenuVisibility={isMenuOpened}
      customSideMenuCallback={setIsMenuOpened}
    >
      <p className="fs-18 font-heavy text-center mr-b-30">API</p>
      <ApiExample />
      <p className="fs-18 font-heavy text-center mr-v-30">UI / UX</p>
      <TopMargin>
        <CircularProgressBarExample />
      </TopMargin>
      <TopMargin>
        <ButtonExample />
      </TopMargin>
      <TopMargin>
        <InputExample />
      </TopMargin>
      <TopMargin>
        <CheckBoxExample />
      </TopMargin>
      <TopMargin>
        <RadioExample />
      </TopMargin>
      <TopMargin>
        <NumbersExample />
      </TopMargin>
      <TopMargin>
        <StatusMarkExample />
      </TopMargin>
      <TopMargin>
        <RangeSliderExample />
      </TopMargin>

      <TopMargin>
        <AlertBoxExample />
      </TopMargin>
      <TopMargin>
        <DropdownExample />
      </TopMargin>
      <TopMargin>
        <KeyboardExample />
      </TopMargin>
      <TopMargin>
        <ActionBlockExample />
      </TopMargin>
      <TopMargin>
        <AccordionExample />
      </TopMargin>
      <TopMargin>
        <ModalExample />
      </TopMargin>
      <TopMargin>
        <BottomTabsExample />
      </TopMargin>
      <TopMargin>
        <SideMenuExample callback={setIsMenuOpened} />
      </TopMargin>
      <TopMargin>
        <MultipleLanguageExample />
      </TopMargin>
      <TopMargin>
        <ChangeThemeExample />
      </TopMargin>
      <TopMargin>
        <SkeletonLoaderExample />
      </TopMargin>
      <TopMargin>
        <SearchExample />
      </TopMargin>
    </Screen>
  );
};

export default ActionsPage;
