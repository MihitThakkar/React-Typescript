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
} from "components";
//Styles
import "./styles.scss";

const RangeSliderExample = () => {
  const [value, setValue] = useState("");
  return (
    <TitleBlock
      title="Range Slider"
      content={<RangeSlider onChange={setValue} min="0" max="100" />}
    />
  );
};

export default RangeSliderExample;
