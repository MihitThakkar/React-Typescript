//React
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
//Components
import { FlexBox, TitleBlock, StatusMark } from "components";
//Styles
import "./styles.scss";

const StatusMarkExample = () => {
  return (
    <TitleBlock
      title="Status Mark"
      content={
        <FlexBox justifyEvenly alignCenter>
          <StatusMark status="SUCCESS" />
          <StatusMark status="FAILED" />
          <StatusMark status="PENDING" />
        </FlexBox>
      }
    />
  );
};

export default StatusMarkExample;
