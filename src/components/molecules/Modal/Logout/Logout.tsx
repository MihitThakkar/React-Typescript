import cx from "classnames";
import { Button, Modal, TranslatedString, FlexBox } from "components";
import React from "react";
import "./styles.scss";
import { SampleModalProps } from "./types";
const SampleModal: React.FC<SampleModalProps> = ({
  visible,
  onClose,
  logoutAction,
}) => {
  return (
    <Modal
      modalHeader={<TranslatedString text="Logout!" />}
      onClose={onClose}
      visible={visible}
      className="sample-modal"
    >
      <p className="fs-16">
        <TranslatedString text="Are you sure you want to logout?" />
      </p>
      <FlexBox justifyBetween alignCenter className="mr-t-30">
      <Button
        onClick={logoutAction}
        text={<TranslatedString text="Yes" />}
        className={cx("w-47")}
        variant="outline"
      />
        <Button
          onClick={onClose}
          text={<TranslatedString text="No" />}
          className={cx("w-47 fs-14")}
        />
      </FlexBox>
    </Modal>
  );
};
export default SampleModal;
