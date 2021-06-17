import React, { FC } from "react";
import iconPc from "../../../public/images/illustration-hero.svg";
import Image from "next/image";
import { HomeDiv, HomeLinks } from "../../styles/Home/HomeStyle";
import { motion } from "framer-motion";

const HomePage: FC = () => {
  return (
    <HomeDiv>
      <motion.div  initial={{ opacity: 0 }}  animate={{ x: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }}>
        <h1>
          A Simple <b>BookMark</b> Manager
        </h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free
        </p>
        <HomeLinks color="true" href="#">
          Get it on Chrome
        </HomeLinks>
        <HomeLinks color="false" href="#">
          Get it on Firefox
        </HomeLinks>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ x: -10, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Image src={iconPc} alt="Img1" />
      </motion.div>
    </HomeDiv>
  );
};

export default HomePage;
