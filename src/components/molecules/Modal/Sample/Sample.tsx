import cx from "classnames";
import { Button, Modal, TranslatedString } from "components";
import React from "react";
import "./styles.scss";
import { SampleModalProps } from "./types";
const SampleModal: React.FC<SampleModalProps> = ({
  visible,
  onClose,
  action,
}) => {
  return (
    <Modal
      modalHeader={<TranslatedString text="Modal Header" />}
      onClose={onClose}
      visible={visible}
      className="sample-modal"
    >
      <p className="fs-16">
        <TranslatedString text="I'm Modal content, keep editing me and beautify as well" />
      </p>
      <Button
        onClick={action}
        text={<TranslatedString text="Done" />}
        className={cx("w-100 mr-t-30")}
      />
    </Modal>
  );
};
export default SampleModal;
