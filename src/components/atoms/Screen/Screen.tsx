import cx from "classnames";
import { Footer, Header, SideMenu } from "components";
import React, { useEffect, useState } from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import { useGeneralDetails } from "Slices";
import { ChangeHistory, history } from "utils";
import "./styles.scss";
import { ScreenProps } from "./types";
let timeout = null;
const Screen: React.FC<ScreenProps> = ({
  preventSlide = false,
  className,
  children,
  headerDetails,
  footerDetails,
  screenAnimationClass,
  customSideMenuVisibility,
  customSideMenuCallback,
}) => {
  const generalDetails = useGeneralDetails();
  const [animationClass, setAnimationClass] = useState("");
  const [showScreen, setShowScreen] = useState(false);
  const [pullRightStart, setPullRightStart] = useState(0);
  const [pullRightMovement, setPullRightMovement] = useState(0);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [ifScroll, setIfScroll] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      const scrollPosition = window.pageYOffset;
      setIfScroll(scrollPosition > 0);
    };
  }, []);

  useEffect(() => {
    typeof customSideMenuVisibility === "boolean" &&
      setIsMenuOpened(customSideMenuVisibility);
  }, [customSideMenuVisibility]);

  useEffect(() => {
    timeout = setTimeout(() => {
      if (screenAnimationClass) {
        setAnimationClass(screenAnimationClass);
      } else if (generalDetails?.screenClass) {
        setAnimationClass(generalDetails?.screenClass);
      } else {
        switch (history.action) {
          case "PUSH":
            setAnimationClass("fadeInRight");
            break;

          case "POP":
            setAnimationClass("fadeInLeft");
            break;

          default:
            break;
        }
      }
      setShowScreen(true);
    }, 0);
    return () => {
      timeout = null;
    };
  }, [generalDetails, screenAnimationClass]);

  return (
    <>
      {isMenuOpened && (
        <div className="screen-replica">
          <div className="screen-replica-children screen-replica-3"></div>
          <div className="screen-replica-children screen-replica-2"></div>
          <div className="screen-replica-children screen-replica-1"></div>
        </div>
      )}
      <div
        className={cx(
          `main-screen animated bg-white ${animationClass}`,
          className,
          isMenuOpened && "menu-opened"
        )}
        onClick={() => {
          if (isMenuOpened) {
            setIsMenuOpened(false);
            customSideMenuCallback && customSideMenuCallback(false);
          }
        }}
        // onTouchStart={(evt) => {
        //   const touch = evt.touches[0];
        //   const x = touch.pageX;
        //   setPullRightStart(x < 50 ? touch.clientX : 0);
        // }}
        // onTouchMove={(evt) => {
        //   const touch = evt.touches[0];
        //   const scrollX = touch.clientX;
        //   const diffInScrollX = scrollX - pullRightStart;
        //   setPullRightMovement(
        //     pullRightStart && diffInScrollX > 0 ? diffInScrollX : 0
        //   );
        //   document.body.style.overflow = pullRightStart ? "hidden" : "auto";
        // }}
        // onTouchEnd={() => {
        //   document.body.style.overflow = "auto";
        //   if (pullRightMovement > 100) {
        //     if (!headerDetails || headerDetails?.backActionToCloseDeeplink) {
        //       // nativeHandler.closeWebView();
        //     } else {
        //       if (!preventSlide) {
        //         headerDetails.customBackAction
        //           ? headerDetails.customBackAction()
        //           : ChangeHistory("back");
        //       }
        //     }
        //   } else {
        //     setPullRightStart(0);
        //     setPullRightMovement(0);
        //   }
        // }}
        // style={{
        //   transform:
        //     pullRightMovement &&
        //     !preventSlide &&
        //     !history.location.pathname.includes("aid/home")
        //       ? `translateX(${pullRightMovement}px)`
        //       : "0px",
        // }}
      >
        {showScreen && (
          <>
            {headerDetails && (
              <Header
                {...headerDetails}
                hamBurgerMenuClickCallback={() => {
                  setIsMenuOpened(!isMenuOpened);
                }}
                className={cx(
                  ifScroll && "box-shadow",
                  "pd-20",
                  headerDetails.className
                )}
                customBackAction={
                  headerDetails.hasSideMenu
                    ? () => setIsMenuOpened(false)
                    : headerDetails.customBackAction
                    ? () => headerDetails.customBackAction?.()
                    : null
                }
              />
            )}
            <div
              className={cx(
                headerDetails && "has-header",
                "pd-20 screen-children bg-white"
              )}
            >
              {children}
            </div>
            {footerDetails && <Footer {...footerDetails} />}
          </>
        )}
        <ToastContainer
          position={toast.POSITION.TOP_CENTER}
          autoClose={2500}
          hideProgressBar={true}
          closeButton={false}
          transition={Slide}
          draggable={false}
          pauseOnFocusLoss={false}
          closeOnClick={true}
          className="toaster"
          limit={1}
        />
      </div>
      <SideMenu
        isOpened={isMenuOpened}
        menuCloseCallback={(visible) => {
          setIsMenuOpened(visible);
          customSideMenuCallback && customSideMenuCallback(visible);
        }}
      />
    </>
  );
};

export default Screen;
