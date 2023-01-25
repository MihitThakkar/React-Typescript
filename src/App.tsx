import React, { useEffect, useState } from "react";
import Routes from "Routes";
import ROUTE_PATH from "Routes/paths";
import { LanguageContext } from "utils";
import { Button, FlexBox, Footer, LanguageSupport, Loader } from "components";
import { setGeneralDetails, useGeneralDetails } from "Slices";
import { env } from "config";
import { globalConstant } from "./constants";
import { useDispatch } from "react-redux";
import store from "store";

const App: React.FC = () => {
  //Dispatch
  const dispatch = useDispatch();

  //Constants
  const [defaultLang, setDefaultLang] = useState(
    window.localStorage.getItem("activeLang") || "en"
  );
  const [isAppBackground, setIsAppBackground] = useState(false);

  //Slices
  const generalDetails = useGeneralDetails();

  //UseEffect
  useEffect(() => {
    const theme: any = localStorage.getItem("theme");
    document.body.setAttribute("data-theme", theme);
    setGeneralDetails({ theme });
    document.addEventListener?.("visibilitychange", visibilityChanged);
  }, []);

  const visibilityChanged = () => {
    console.log({
      appState: document.hidden ? "Background" : "Foreground",
      visibilityState: document.visibilityState,
    });
    setIsAppBackground(document.hidden);
  };

  return (
    <LanguageContext.Provider
      value={[
        defaultLang,
        (lang: string) => {
          setDefaultLang(lang);
        },
      ]}
    >
      <div
        className="app"
        unselectable="on"
        onSelectCapture={() => {
          return false;
        }}
      >
        <LanguageSupport
          visible={generalDetails?.showChangeLanguageScreen}
          onClose={() =>
            setGeneralDetails({
              showChangeLanguageScreen: false,
            })
          }
        />
        <div className="router">
          <Routes />
          <Loader />
        </div>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
