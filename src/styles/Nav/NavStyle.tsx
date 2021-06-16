import styled from "@emotion/styled";
import { motion } from "framer-motion";

interface Login {
  login: true | false;
  display: string;
}
interface Display {
  display: string;
}
export const Navegation = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0 20px 0;
  border-bottom: 1px solid black;
`;
export const NavLinks = styled.div<Display>`
  color: black;
  text-decoration: none;
  font-size: ${({display})=>display === 'true' ? 'medium' : 'large'};
  width: ${({display})=> display === 'true' ? '100%' : '323px'};
  display: ${({ display }) => (display ==='true' ? "none" : "flex")};
  justify-content: ${({ display }) => (display === 'true' ? "none" : "space-between")};
  align-items: ${({ display }) => (display === 'true' ? "center" : "none")};
  flex-direction: ${({display})=> display === 'true' ? 'column' : 'none'};
  border-bottom: ${({display})=> display === 'true' ? '1px solid black' : 'none'};
  div {
    display: flex;
    width: ${({display})=> display === 'true' ? "100%" : "auto"};
    align-items: ${({display})=> display === 'true' ? 'center' : 'none'};
    flex-direction: ${({display})=> display === 'true' ? 'column' : 'none'};
  }
  @media (max-width: 501px) {
    display: ${({display})=> display === 'true' ? 'flex': 'none' };
  }
`;
export const NavLink = styled.a<Login>`
  border-radius: ${({login}) => login ?  '8px' : '8px'};
  padding: 8px 10px;
  color: ${({ login }) => (login ? "dodgerblue" : "black")};
  width: 100%;
  display: flex;
  justify-content: center;
  &:active {
    background-color: ${({ login }) => (login ? "dodgerblue" : "black")};
    color: ${({ login }) => (login ? "white" : "white")};
  }
`;
export const NavButton = styled.div`
  display: none;
  @media (max-width: 501px) {
    display: flex;
  }
  button {
    background-color: white;
    border: none;
  }
`;
