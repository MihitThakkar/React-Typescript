//React
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
//Libraries
import cx from "classnames";
//Components
import { TranslatedString, FlexBox, Card } from "components";
//Slices
import { fetchBaseApiDetailsApi, useBaseApiDetails } from "Slices";
//Styles
import "./styles.scss";

const ApiExample = () => {
  //Dispatch
  const dispatch = useDispatch();

  //Slice
  const baseApiDetails = useBaseApiDetails();

  return (
    <div>
      <FlexBox justifyBetween alignCenter>
        <Card
          onClick={() => {
            dispatch(fetchBaseApiDetailsApi("GET"));
          }}
          className="w-47 text-center clicking-animation"
        >
          <TranslatedString text="GET Api Call" />
        </Card>
        <Card
          onClick={() => {
            dispatch(fetchBaseApiDetailsApi("POST"));
          }}
          className="w-47 text-center clicking-animation"
        >
          <TranslatedString text="POST Api Call" />
        </Card>
      </FlexBox>
      {baseApiDetails?.data && (
        <Card className="api-response mr-t-20 fs-16 font-medium overflow-scroll pd-h-10">
          {Object.entries(baseApiDetails?.data).map(
            (item: any, index: number) => {
              return (
                <FlexBox alignCenter key={`sample-api-response-${item[0]}`}>
                  <p className="clr-disabled">{item[0]}: </p>
                  <p className="mr-l-10">{JSON.stringify(item[1])}</p>
                </FlexBox>
              );
            }
          )}
        </Card>
      )}
    </div>
  );
};
export default ApiExample;
