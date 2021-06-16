import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import iconBookMark from "../../../../public/images/logo-bookmark.svg";
import {
  NavLinks,
  NavLink,
  Navegation,
  NavButton,
} from "../../../styles/Nav/NavStyle";
import NavLinkDiv from "./components/NavLinkDiv";
import { motion } from "framer-motion";

const Nav: FC = () => {
  const [list, setlist] = useState(false);
  const handleChange = () => {
    const isValidList = list ? setlist(false) : setlist(true);
    return isValidList;
  };
  return (
    <>
      <Navegation initial={{ opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}>
        <div
        >
          <Link href="/">
            <a>
              <Image src={iconBookMark} alt="xd" />
            </a>
          </Link>
        </div>
        <NavLinkDiv display="false" login={false} login2 />
          <NavButton >
            <button onClick={handleChange}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="#1e90ff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.18796 2H24"
                  stroke="#1e90ff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.1835 12.9589H23.9901"
                  stroke="#1e90ff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.18796 23.9177H23.9909"
                  stroke="#1e90ff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </NavButton>
      </Navegation>
      {list && <NavLinkDiv display="true" login={false} login2 />}
    </>
  );
};

export default Nav;
