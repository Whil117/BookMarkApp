import React, { FC } from "react";
import { NavLinks, NavLink } from "../../../styles/Nav/NavStyle";

interface Props {
  display: string;
  login: true | false;
  login2: true;
}

const NavLinkDiv: FC<Props> = ({ display, login, login2 = true }) => {
  return (
    <NavLinks display={display}>
      <div>
        <NavLink display={display} login={login} href="#features">
          Features
        </NavLink>
        <NavLink display={display} login={login} href="#">
          Pricing
        </NavLink>
        <NavLink display={display} login={login} href="#">
          Contact
        </NavLink>
      </div>
      <div>
        <NavLink display={display} login={login2} href="#">
          Login
        </NavLink>
      </div>
    </NavLinks>
  );
};

export default NavLinkDiv;
