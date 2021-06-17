import React, { FC, useState } from "react";
import {
  ButtonSect,
  AskedDiv,
  AskedDescript,
} from "../../../styles/Questions/QuestionsStyle";

interface AskedProps {
  title: string;
  descript: string;
}

const Asked: FC<AskedProps> = ({ title, descript }) => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    const isValidDisplay = display ? setDisplay(false) : setDisplay(true);
    return isValidDisplay;
  };
  return (
    <AskedDiv active={display === true}>
      <ButtonSect
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        active={display === true}
        onClick={handleClick}
      >
        {title}
        {display ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
          <path
            fill="none"
            stroke="#1e90ff"
            strokeWidth="3"
            d="M1 1l8 8 8-8"
          />
        </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
          <path
            fill="none"
            stroke="black"
            strokeWidth="3"
            d="M1 1l8 8 8-8"
          />
        </svg>
        )}
      </ButtonSect>
      <AskedDescript active={display === true}>
        {display && <p>{descript}</p>}
      </AskedDescript>
    </AskedDiv>
  );
};

export default Asked;
