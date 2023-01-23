//React
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
//Components
import {
  ActionBlock,
  TranslatedString,
  Switch,
  TitleBlock,
  RangeSlider,
  CircularProgressBar,
  FlexBox,
} from "components";
//Styles
import "./styles.scss";

const CircularProgressBarExample = () => {
  return (
    <TitleBlock
      title="Circular Progress Bar"
      content={
        <FlexBox justifyBetween alignCenter>
          <FlexBox justifyCenter alignCenter className="w-50">
            <CircularProgressBar value="80" className="" />
          </FlexBox>
          <FlexBox justifyCenter alignCenter className="w-50">
            <CircularProgressBar
              value="80"
              semiCircle
              className=""
              width={180}
            />
          </FlexBox>
        </FlexBox>
      }
    />
  );
};

export default CircularProgressBarExample;
