//React
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
//Components
import { FlexBox, TitleBlock, Input } from "components";
//Styles
import "./styles.scss";

const InputExample = () => {
  //Constants
  const [simpleInputValue, setSimpleInputValue] = useState("");
  const [labelInputValue, setLabelInputValue] = useState("");

  return (
    <TitleBlock
      title="Input"
      content={
        <FlexBox justifyBetween alignCenter>
          <Input
            value={simpleInputValue}
            onChange={(event) => {
              const value = event?.target.value;
              setSimpleInputValue(value);
            }}
            placeholder="Simple Input"
            className="w-47"
          />
          <Input
            value={labelInputValue}
            onChange={(event) => {
              const value = event?.target.value;
              setLabelInputValue(value);
            }}
            hasLabel
            placeholder="Label Input"
            className="w-47"
          />
        </FlexBox>
      }
    />
  );
};

export default InputExample;
