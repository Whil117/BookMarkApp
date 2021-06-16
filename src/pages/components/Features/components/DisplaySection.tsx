import React, { FC } from "react";
import Image from 'next/image'
import { motion } from "framer-motion";

interface Props {
  image: any;
  title: string;
  descript: string;
}

const DisplaySection: FC<Props> = ({ image, title, descript }) => {
  return (
    <>
        <motion.div initial={{ opacity: 0 }}  animate={{ x: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }}>
            <Image src={image} alt={title} />
        </motion.div>
        <motion.div initial={{ opacity: 0 }}  animate={{ x: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }}>
            <h3>{title}</h3>
            <p>{descript}</p>
            <a href="#">More Info</a>
        </motion.div>
    </>
  );
};

export default DisplaySection;
