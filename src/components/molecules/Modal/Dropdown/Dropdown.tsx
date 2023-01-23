import cx from "classnames";
import {
  Button,
  FlexBox,
  Modal,
  StatusMark,
  TranslatedString,
  Image,
} from "components";
import React from "react";
import "./styles.scss";
import { DropdownModalProps } from "./types";
//Assets
import YellowSuccessImg from "assets/icons/blue-success.svg";
const DropdownModal: React.FC<DropdownModalProps> = ({
  visible,
  onClose,
  list,
  title,
  callback,
  selected,
  stringList,
}) => {
  return (
    <Modal
      modalHeader={<TranslatedString text={title} />}
      onClose={onClose}
      visible={visible}
      className="dropdown-modal"
    >
      <div className="dropdown-list">
        {list.map((item: any, index: number) => (
          <FlexBox
            justifyBetween
            alignCenter
            onClick={() => {
              const callbackItem = stringList ? index : item;
              callback(callbackItem);
              onClose();
            }}
            className="pd-v-20 border-bottom curs-point"
            key={`dropdown-value-${index}`}
          >
            <p
              className={cx(
                selected === item ||
                  (selected === stringList?.[index] && "clr-theme"),
                "fs-18 font-medium"
              )}
            >
              {item}
            </p>
            {selected === item ||
              (selected === stringList?.[index] && (
                <Image src={YellowSuccessImg} className="w-7 animated zoomIn" />
              ))}
          </FlexBox>
        ))}
      </div>
    </Modal>
  );
};
export default DropdownModal;
