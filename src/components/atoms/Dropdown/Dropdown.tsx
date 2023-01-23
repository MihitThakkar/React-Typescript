import React, { useEffect, useState } from "react";
import cx from "classnames";
import { ActionBlock, DropdownModal, TitleBlock, Card } from "components";
import "./styles.scss";
import { DropdownProps } from "./types";
const Dropdown: React.FC<DropdownProps> = ({
  className,
  defaultValue = "",
  title,
  list,
  openDropDown,
  callback,
  stringList,
}) => {
  //Constants
  const [dropdownModalVisibility, setDropdownModalVisibility] = useState(false);
  const [dropdownSelection, setDropdownSelection] = useState(defaultValue);

  //useEffect
  useEffect(() => {
    if (openDropDown) {
      setDropdownModalVisibility(true);
    }
  }, [openDropDown]);

  return (
    <div className={cx("drop-down", className)}>
      <Card
        onClick={() => {
          setDropdownModalVisibility(true);
        }}
        className={cx(
          dropdownSelection && "theme-border clr-black",
          "border-bottom pd-10 fs-16 font-medium"
        )}
      >
        <p className="text-center curs-point">
          {dropdownSelection || `Select ${title}`}
        </p>
      </Card>
      <DropdownModal
        visible={dropdownModalVisibility}
        onClose={() => {
          setDropdownModalVisibility(false);
        }}
        callback={(value) => {
          const DropdownSelectionValue = stringList ? list[value] : value;
          const callbackValue = stringList ? stringList[value] : value;
          setDropdownSelection(DropdownSelectionValue);
          callback(callbackValue);
        }}
        title={`Select ${title}`}
        list={list}
        selected={dropdownSelection}
        stringList={stringList}
      />
    </div>
  );
};
export default Dropdown;
