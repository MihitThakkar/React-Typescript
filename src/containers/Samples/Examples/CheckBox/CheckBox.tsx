//React
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
//Components
import { TitleBlock, Checkbox } from "components";
//Styles
import "./styles.scss";

const CheckBoxExample = () => {
  //Constants
  const [checkboxChecked, setCheckboxChecked] = useState(true);

  return (
    <TitleBlock
      title="Checkbox"
      content={
        <Checkbox
          onChange={setCheckboxChecked}
          label="Checkbox Label"
          checked={checkboxChecked}
          labelClass="clr-disabled"
        />
      }
    />
  );
};

export default CheckBoxExample;
