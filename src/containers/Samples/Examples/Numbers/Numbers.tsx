//React
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
//Components
import { TitleBlock, RupeeAmount, FlexBox, Card } from "components";
//Styles
import "./styles.scss";
import { numberFunctions } from "utils";

const NumbersExample = () => {
  return (
    <TitleBlock
      title="Numbers"
      content={
        <Card>
          <FlexBox justifyBetween alignCenter>
            <p className="fs-14">Currency</p>
            <RupeeAmount amount={100000} amountClass="fs-20" />
          </FlexBox>
          <FlexBox justifyBetween alignCenter className="mr-t-10">
            <p className="fs-14">Compact</p>
            <p>{numberFunctions.compactNumber(100000)}</p>
          </FlexBox>
          <FlexBox justifyBetween alignCenter className="mr-t-10">
            <p className="fs-14">Random Numbers</p>
            <p>{numberFunctions.randomNumber(1000, 1000000)}</p>
          </FlexBox>
        </Card>
      }
    />
  );
};

export default NumbersExample;
