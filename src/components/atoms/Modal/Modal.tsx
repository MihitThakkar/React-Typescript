import cx from "classnames";
import { FlexBox } from "components";
import React, { useEffect, useState } from "react";
import { isIOS } from "utils";
import "./styles.scss";
import { ModalProps } from "./types";
const Dialog = (props: any) => {
  const [rectangleVisible, setRectangleVisible] = useState(false);
  const [pullDownStart, setPullDownStart] = useState(0);
  const [pullDownMovement, setPullDownMovement] = useState(0);
  const animation =
    (props.animationType === "enter"
      ? props.enterAnimation
      : props.leaveAnimation) || props.animation;
  const className = `modal-inner-content modal-${animation}-${props.animationType}`;
  const { width, duration, customStyles } = props;
  const style = {
    width: width + "%",
    height: "auto",
    animationDuration: duration + "ms",
    WebkitAnimationDuration: duration + "ms",
  };
  const mergedStyles = { ...style, ...customStyles };
  useEffect(() => {
    if (props.visible) {
      setPullDownStart(0);
      setPullDownMovement(0);
      setTimeout(() => {
        setRectangleVisible(true);
      }, 300);
    } else {
      setRectangleVisible(false);
    }
  }, [props.visible]);
  return (
    <div
      className="modal-dialog"
      style={{ marginBottom: `-${pullDownMovement}px` }}
    >
      <div
        style={mergedStyles}
        className={className}
        // onTouchStart={(evt) => {
        //   props.isPullable && setPullDownStart(evt.touches[0].clientY);
        // }}
        // onTouchMove={(evt) => {
        //   let scrollY = evt.touches[0].clientY;
        //   let diffInScrollY = scrollY - pullDownStart;
        //   if (props.isPullable) {
        //     setPullDownMovement(diffInScrollY);
        //     props.pullDownMovementCallback &&
        //       props.pullDownMovementCallback(pullDownMovement);
        //   }
        // }}
        // onTouchEnd={() => {
        //   if (props.isPullable) {
        //     if (pullDownMovement > 150) props.onClick();
        //     else {
        //       setPullDownStart(0);
        //       setPullDownMovement(0);
        //     }
        //   }
        // }}
      >
        {rectangleVisible && (
          <div
            className={cx(isIOS && "ios", "modal-rectangle animated fadeInUp")}
          ></div>
        )}
        {props.modalHeader && (
          <FlexBox justifyBetween alignCenter className="heading-section">
            <p className="font-heavy">{props.modalHeader}</p>
          </FlexBox>
        )}
        {props.children}
      </div>
    </div>
  );
};
const Modal: React.FC<ModalProps> = ({
  visible,
  onClose,
  showMask = true,
  className,
  children,
  isPullable = true,
  modalHeader,
}) => {
  const [isShow, setIsShow] = useState(false);
  const [animationType, setAnimationType] = useState("leave");
  const [pullDownMovement, setPullDownMovement] = useState(5);

  useEffect(() => {
    visible && enter();
    return () => {
      leave();
    };
  });

  useEffect(() => {
    visible ? enter() : leave();
  }, [visible]);

  const enter = () => {
    setIsShow(true);
    setAnimationType("enter");
    setPullDownMovement(4);
    document.body.style.overflow = "hidden";
  };

  const leave = () => {
    // setIsShow(false);
    setAnimationType("leave");
    document.body.style.overflow = "auto";
  };

  const style: any = {
    display: isShow ? "" : "none",
    animationDuration: 300 + "ms",
    WebkitAnimationDuration: 300 + "ms",
  };

  const animationEnd = (event: any) => {
    if (animationType === "leave") {
      setIsShow(false);
    }
  };
  const mask = showMask ? (
    <div
      className={cx("modal-mask", `back-drop-${pullDownMovement}`)}
      onClick={onClose}
    />
  ) : null;

  return (
    <div
      style={{ backdropFilter: `blur(${pullDownMovement}px)`, ...style }}
      className={"modal modal-fade-" + animationType + " " + className}
      onAnimationEnd={animationEnd}
      tabIndex={-1}
    >
      {mask}
      <Dialog
        animation={"slideUp"}
        animationType={animationType}
        duration={300}
        width={100}
        visible={visible}
        isPullable={isPullable}
        modalHeader={modalHeader}
        onClick={onClose}
        pullDownMovementCallback={(pullDownMovement: number) => {
          setPullDownMovement(
            4 - pullDownMovement / 70 > 4 ? 4 : 4 - pullDownMovement / 70
          );
        }}
      >
        {children}
      </Dialog>
    </div>
  );
};

export default Modal;
