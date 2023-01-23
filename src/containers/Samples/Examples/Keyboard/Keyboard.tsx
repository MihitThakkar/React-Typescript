//React
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
//Components
import { Keyboard, FlexBox, TitleBlock } from "components";
//Styles
import "./styles.scss";

const KeyboardExample = () => {
  //Constants
  const [keyboardOrientation, setKeyboardOrientation] = useState("portrait");

  return (
    <TitleBlock
      title="Keyboard"
      content={
        <>
          <FlexBox justifyBetween alignCenter className="mr-b-20">
            <p
              onClick={() => {
                setKeyboardOrientation("landscape");
              }}
              className="w-47 pd-10 br-12 text-center full-border clicking-animation"
            >
              Landscape
            </p>
            <p
              onClick={() => {
                setKeyboardOrientation("portrait");
              }}
              className="w-47 pd-10 br-12 text-center full-border clicking-animation"
            >
              Portrait
            </p>
          </FlexBox>
          <Keyboard
            orientation={keyboardOrientation}
            callback={(key) => {
              console.log({
                key,
              });
            }}
          />
        </>
      }
    />
  );
};

export default KeyboardExample;
