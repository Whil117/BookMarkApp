import React, { FC, useState } from "react";
import PhotoS1 from "../../../../public/images/illustration-features-tab-1.svg";
import PhotoS2 from "../../../../public/images/illustration-features-tab-2.svg";
import PhotoS3 from "../../../../public/images/illustration-features-tab-3.svg";
import {
  FeatureChildDiv1,
  FeatureDiv,
  FeatureChildDiv3,
  FeatureLabel,
} from "../../../styles/Features/FeaturesStyle";
import DisplaySection from "./components/DisplaySection";
import { motion } from "framer-motion";

const data = {
  title: ["BookMark One Click", "Intelligent Search", "Share your Bookmarks"],
  descript: {
    one: "Organize your bookmarks however you like. Our simple darg-and-drop interface gives you complete control over how you manage your favorite sites",
    two: "Our powerful search feature will help you find saved sites in to time at all. No need to trawl through all of your bookmarks",
    three:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button",
  },
};

const Features: FC = () => {
  const [mode, setMode] = useState({
    mode: "simple",
  });
  const [display, setDisplay] = useState("simple");

  const handleChange = (event: any) => {
    setMode({
      mode: event.target.name,
    });
  };
  console.log(mode);
  return (
    <FeatureDiv id="features">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <FeatureChildDiv1>
          <h2>Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go
          </p>
        </FeatureChildDiv1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <FeatureLabel htmlFor="simple" active={mode.mode === "simple"}>
          <b>Simple</b>
        </FeatureLabel>
        <FeatureLabel active={mode.mode === "speepdy"} htmlFor="speepdy">
          <b>Speedy</b>
        </FeatureLabel>
        <FeatureLabel active={mode.mode === "easy"} htmlFor="easy">
          <b>Easy</b>
        </FeatureLabel>
        <input
          type="radio"
          onChange={handleChange}
          value={mode.mode}
          checked={mode.mode === "simple"}
          name="simple"
          id="simple"
          onClick={() => setDisplay("simple")}
        />
        <input
          type="radio"
          onChange={handleChange}
          value={mode.mode}
          checked={mode.mode === "speepdy"}
          name="speepdy"
          id="speepdy"
          onClick={() => setDisplay("speedy")}
        />
        <input
          type="radio"
          onChange={handleChange}
          value={mode.mode}
          checked={mode.mode === "easy"}
          name="easy"
          id="easy"
          onClick={() => setDisplay("easy")}
        />
      </motion.div>
      <FeatureChildDiv3>
        {display === "simple" && (
          <DisplaySection
            image={PhotoS1}
            title={data.title[0]}
            descript={data.descript.one}
          />
        )}
        {display === "speedy" && (
          <DisplaySection
            image={PhotoS2}
            title={data.title[1]}
            descript={data.descript.two}
          />
        )}
        {display === "easy" && (
          <DisplaySection
            image={PhotoS3}
            title={data.title[2]}
            descript={data.descript.three}
          />
        )}
      </FeatureChildDiv3>
    </FeatureDiv>
  );
};

export default Features;
