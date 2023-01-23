//React
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
//Components
import { FlexBox, TitleBlock, SkeletonLoader } from "components";
//Styles
import "./styles.scss";

const SkeletonLoaderExample = () => {
  return (
    <TitleBlock
      title="Skeleton Loader"
      content={
        <FlexBox justifyBetween alignCenter>
          <SkeletonLoader height="100px" width="30%" className="br-9" />
          <div>
            <SkeletonLoader height="10px" width="100px" className="br-9" />
            <SkeletonLoader
              height="10px"
              width="100px"
              className="br-9 mr-t-10"
            />
            <SkeletonLoader
              height="10px"
              width="100px"
              className="br-9 mr-t-10"
            />
            <SkeletonLoader
              height="10px"
              width="100px"
              className="br-9 mr-t-10"
            />
            <SkeletonLoader
              height="10px"
              width="100px"
              className="br-9 mr-t-10"
            />
          </div>
          <SkeletonLoader height="100px" width="100px" className="br-100" />
        </FlexBox>
      }
    />
  );
};

export default SkeletonLoaderExample;
