//React
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
//Components
import { FlexBox, Button, TitleBlock } from "components";
//Styles
import "./styles.scss";

const ButtonExample = () => {
  return (
    <TitleBlock
      title="Buttons"
      content={
        <>
          <FlexBox justifyBetween alignCenter>
            <Button className="w-47" text="Simple" />
            <Button className="w-47" text="Outline" variant="outline" />
          </FlexBox>
          <FlexBox justifyBetween alignCenter className="mr-t-20">
            <Button className="w-47" text="No-Outline" variant="no-outline" />
            <Button className="w-47" text="Disabled" disabled />
          </FlexBox>
        </>
      }
    />
  );
};

export default ButtonExample;
