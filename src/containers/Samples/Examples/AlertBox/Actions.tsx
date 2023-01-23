//React
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
//Components
import { TitleBlock, AlertBox } from "components";
//Styles
import "./styles.scss";
const AlertBoxExample = () => {
  return (
    <TitleBlock
      title="Alert Box"
      content={
        <>
          <AlertBox message="Failed Alert Message" />
          <AlertBox
            message="Success Alert Message"
            status="SUCCESS"
            className="mr-t-10"
          />
        </>
      }
    />
  );
};
export default AlertBoxExample;
