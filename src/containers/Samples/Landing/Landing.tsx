//React
//Components
import { Screen, TranslatedString } from "components";
import React, { useEffect } from "react";
import ROUTE_PATH from "Routes/paths";
import { setGeneralDetails, useGeneralDetails } from "Slices";
//Utils
import { ChangeHistory } from "utils";
//Styles
import "./styles.scss";
const Landing = () => {
  //Slices
  const generalDetails = useGeneralDetails();

  //useEffects
  useEffect(() => {
    setGeneralDetails({
      name: "Mihit Thakkar",
    });
  }, []);

  //Return UI
  return (
    <Screen
      className="landing-screen"
      headerDetails={{
        pageName: <TranslatedString text="Landing Page" />,
      }}
      footerDetails={{
        buttonText: <TranslatedString text="Checkout Components" />,
        buttonAction: () => {
          ChangeHistory("push", ROUTE_PATH.SAMPLES.ACTIONS);
        },
      }}
    >
      <p className="fs-20">
        Hey, <span className="font-heavy">{generalDetails?.name}</span>
      </p>
    </Screen>
  );
};

export default Landing;
