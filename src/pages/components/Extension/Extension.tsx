import React from "react";
import { data } from "./assets/data";
import { Card } from "./components/Card";
import iconGoogle from "../../../../public/images/logo-chrome.svg";
import iconFireFox from "../../../../public/images/logo-firefox.svg";
import iconOpera from "../../../../public/images/logo-opera.svg";
import {
  ExtensionDiv,
  ExtensionChildDiv1,
  ExtensionChildDiv2,
} from "../../../styles/Extension/ExtensionStyle";
const Extension = () => {
  return (
    <ExtensionDiv
      initial={{ opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <ExtensionChildDiv1>
        <h3>Download Extension</h3>
        <p>{data.info}</p>
      </ExtensionChildDiv1>
      <ExtensionChildDiv2>
        <Card
          img={iconGoogle}
          title="Add to Chrome"
          descript="Minimum version 6.2"
        />
        <Card
          img={iconFireFox}
          title="Add to Firefox"
          descript="Minimum version 5.5"
        />
        <Card
          img={iconOpera}
          title="Add to Opera"
          descript="Minimum version 4.6"
        />
      </ExtensionChildDiv2>
    </ExtensionDiv>
  );
};

export default Extension;
