//React
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
//Components
import { FlexBox, TitleBlock, Radio } from "components";
//Styles
import "./styles.scss";

const RadioExample = () => {
  //Constants
  const [radioSelected, setRadioSelected] = useState("");

  return (
    <TitleBlock
      title="Radio"
      content={
        <FlexBox alignCenter>
          <Radio
            label="Radio Label 1"
            isChecked={radioSelected === "1"}
            onChange={() => {
              setRadioSelected("1");
            }}
          />
          <Radio
            label="Radio Label 2"
            isChecked={radioSelected === "2"}
            onChange={() => {
              setRadioSelected("2");
            }}
          />
        </FlexBox>
      }
    />
  );
};

export default RadioExample;
