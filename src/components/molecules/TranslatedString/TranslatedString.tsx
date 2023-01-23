import { langConstant } from "../../../constants";
import React, { useContext, useEffect, useState } from "react";
import { history, LanguageContext } from "utils";
import "./styles.scss";
import { TranslatedStringProps } from "./types";

const TranslatedString: React.FC<TranslatedStringProps> = ({
  text,
  preText,
  postText,
  innerHtmlClickListener,
  htmlClassName,
  customPage,
  midValues,
}) => {
  const page = customPage || history.location.pathname || "";
  const [lang] = useContext(LanguageContext);
  const [finalText, setFinalText]: any = useState("");
  const isHTML = (str: string, callback: any) => {
    var doc = new DOMParser().parseFromString(str, "text/html");
    Array.from(doc.body.childNodes).some((node) => {
      callback({
        hasHtml: node.nodeType === 1,
        htmlTag: node.nodeName.toString().toLowerCase(),
        htmlInnerText: node.textContent,
      });
      return null;
    });
  };

  const modifyingText = (text: any) => {
    if (preText && postText)
      setFinalText(
        <>
          {preText} {text} {postText}
        </>
      );
    else if (preText)
      setFinalText(
        <>
          {preText} {text}
        </>
      );
    else if (postText)
      setFinalText(
        <>
          {text} {postText}
        </>
      );
    else setFinalText(text);
  };

  useEffect(() => {
    const langText: string = langConstant[lang]?.[page]?.[text] || text;
    let textArray: any[] = [];
    const finalText = langText || text;
    isHTML(finalText, (data: any) => {
      const hasHtml = data["hasHtml"];
      const htmlTag = data["htmlTag"];
      const htmlInnerText = data["htmlInnerText"];
      if (hasHtml) {
        const appendHtml = React.createElement(
          htmlTag,
          {
            onClick: innerHtmlClickListener,
            className: htmlClassName,
          },
          htmlInnerText
        );
        textArray.push(appendHtml);
      } else {
        if (midValues) {
          let finalString = 0;
          let stringBreak = [];
          midValues.map((item: any, index: number) => {
            stringBreak.push(<>{htmlInnerText.split("<>")[index]}</>);
            const replacedMidValues = React.createElement(
              item["htmlTag"],
              {
                className: item["class"] || "",
              },
              item["value"]
            );
            finalString = finalString + 1;
            stringBreak.push(replacedMidValues);
          });
          htmlInnerText.split("<>")[finalString] &&
            stringBreak.push(htmlInnerText.split("<>")[finalString]);
          textArray.push(stringBreak);
        } else {
          textArray.push(htmlInnerText);
        }
      }
    });
    modifyingText(textArray);
  }, [lang]);

  return <>{finalText}</>;
};

export default TranslatedString;
