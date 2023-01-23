import cx from "classnames";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setGeneralDetails, useGeneralDetails } from "Slices";
import FlexBox from "../FlexBox";
import "./styles.scss";
import { LoaderProps } from "./types";

export const showLoader = () => {
  setGeneralDetails({
    isLoading: true,
  });
};

export const removeLoader = () => {
  setGeneralDetails({
    isLoading: false,
  });
};

const Loader: React.FC<LoaderProps> = ({ className, isLoading }) => {
  const generalDetails = useGeneralDetails();

  return generalDetails?.isLoading || isLoading ? (
    <FlexBox justifyCenter alignCenter className="loader-section">
      <span className="loader"></span>
    </FlexBox>
  ) : (
    <></>
  );
};
export default Loader;
