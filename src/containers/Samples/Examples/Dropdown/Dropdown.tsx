//React
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
//Components
import { Dropdown } from "components";
//Styles
import "./styles.scss";

const DropdownExample = () => {
  //Constants
  const [dropdownValue, setDropdownValue] = useState("");

  return (
    <Dropdown
      title="Drop down"
      list={[
        "Drop down 1",
        "Drop down 2",
        "Drop down 3",
        "Drop down 4",
        "Drop down 5",
      ]}
      className="mr-t-20"
      callback={setDropdownValue}
    />
  );
};

export default DropdownExample;
