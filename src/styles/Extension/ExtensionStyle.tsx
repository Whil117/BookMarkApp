import { motion } from "framer-motion";
import styled from "@emotion/styled";

export const CardChild = styled(motion.div)`
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 10px #d3d3d3;
  margin: 10px;
  width: 240px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    border-radius: 5px;
    padding: 10px;
    color: white;
    background-color: dodgerblue;
  }
  a:hover {
    color: dodgerblue;
    background-color: white;
    border: 1px solid dodgerblue;
  }
`;
export const ExtensionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  h3{
      color: dodgerblue;
  }
`;
export const ExtensionChildDiv2 = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 align-items: center;
`
export const ExtensionChildDiv1 = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`