import KeyboardBack from "assets/icons/keyboard-back.svg";
import cx from "classnames";
import { Card, FlexBox } from "components";
import React, { useState } from "react";
import "./styles.scss";
import { KeyboardProps } from "./types";
const KeyboardHtml = (props: any) => {
  return (
    <div className={cx("keyboard", props?.className)}>
      <FlexBox
        justifyBetween={props?.orientation === "landscape"}
        justifyAround={props?.orientation === "portrait"}
        alignCenter
      >
        <FlexBox
          justifyCenter
          alignCenter
          className="keys br-100 clicking-animation fs-20 font-medium"
          onClick={() => {
            props?.callback("1");
          }}
        >
          1
        </FlexBox>
        <FlexBox
          justifyCenter
          alignCenter
          className="keys br-100 clicking-animation fs-20 font-medium"
          onClick={() => {
            props?.callback("2");
          }}
        >
          2
        </FlexBox>
        <FlexBox
          justifyCenter
          alignCenter
          className="keys br-100 clicking-animation fs-20 font-medium"
          onClick={() => {
            props?.callback("3");
          }}
        >
          3
        </FlexBox>
        {props?.orientation === "landscape" && (
          <img
            src={KeyboardBack}
            className="clicking-animation"
            onClick={() => {
              props?.callback("back");
            }}
          />
        )}
      </FlexBox>
      <FlexBox
        justifyBetween={props?.orientation === "landscape"}
        justifyAround={props?.orientation === "portrait"}
        alignCenter
        className="mr-t-20"
      >
        <FlexBox
          justifyCenter
          alignCenter
          className="keys br-100 clicking-animation fs-20 font-medium"
          onClick={() => {
            props?.callback("4");
          }}
        >
          4
        </FlexBox>
        <FlexBox
          justifyCenter
          alignCenter
          className="keys br-100 clicking-animation fs-20 font-medium"
          onClick={() => {
            props?.callback("5");
          }}
        >
          5
        </FlexBox>
        <FlexBox
          justifyCenter
          alignCenter
          className="keys br-100 clicking-animation fs-20 font-medium"
          onClick={() => {
            props?.callback("6");
          }}
        >
          6
        </FlexBox>
        {props?.orientation === "landscape" && (
          <FlexBox
            justifyCenter
            alignCenter
            className="keys br-100 clicking-animation fs-20 font-medium"
            onClick={() => {
              props?.callback(".");
            }}
          >
            .
          </FlexBox>
        )}
      </FlexBox>
      <FlexBox
        justifyBetween={props?.orientation === "landscape"}
        justifyAround={props?.orientation === "portrait"}
        alignCenter
        className="mr-t-20"
      >
        <FlexBox
          justifyCenter
          alignCenter
          className="keys br-100 clicking-animation fs-20 font-medium"
          onClick={() => {
            props?.callback("7");
          }}
        >
          7
        </FlexBox>
        <FlexBox
          justifyCenter
          alignCenter
          className="keys br-100 clicking-animation fs-20 font-medium"
          onClick={() => {
            props?.callback("8");
          }}
        >
          8
        </FlexBox>
        <FlexBox
          justifyCenter
          alignCenter
          className="keys br-100 clicking-animation fs-20 font-medium"
          onClick={() => {
            props?.callback("9");
          }}
        >
          9
        </FlexBox>
        {props?.orientation === "landscape" && (
          <FlexBox
            justifyCenter
            alignCenter
            className="keys br-100 clicking-animation fs-20 font-medium"
            onClick={() => {
              props?.callback("0");
            }}
          >
            0
          </FlexBox>
        )}
      </FlexBox>
      {props?.orientation === "portrait" && (
        <FlexBox justifyAround alignCenter className="mr-t-20">
          <FlexBox
            justifyCenter
            alignCenter
            className="keys br-100 clicking-animation fs-20 font-medium"
            onClick={() => {
              props?.callback(".");
            }}
          >
            .
          </FlexBox>
          <FlexBox
            justifyCenter
            alignCenter
            className="keys br-100 clicking-animation fs-20 font-medium"
            onClick={() => {
              props?.callback("0");
            }}
          >
            0
          </FlexBox>
          <img
            src={KeyboardBack}
            className="clicking-animation"
            onClick={() => {
              props?.callback("back");
            }}
          />
        </FlexBox>
      )}
    </div>
  );
};

const Keyboard: React.FC<KeyboardProps> = ({
  className,
  orientation,
  callback,
}) => (
  <KeyboardHtml
    orientation={
      orientation
        ? orientation
        : window.screen.width < 380
        ? "landscape"
        : "portrait"
    }
    className={className}
    callback={callback}
  />
);

export default Keyboard;
