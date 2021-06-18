import { motion } from "framer-motion"
import styled from '@emotion/styled'

interface Send {
  send: string;
}
export const EmailDiv = styled(motion.div)`
  background-color: dodgerblue;
  display: flex;
  justify-content: center;
  font-size: large;
  height: 400px;
  align-items: center;
  padding: 10px;
`;
export const EmailChildDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  p {
    color: white;
  }
  h2 {
    color: white;
  }
`;

export const EmailInput = styled.input`
  border: none;
  padding: 10px;
  height: 40px;
  margin: 5px;
`;
export const EmailButton = styled.button<Send>`
  padding: 10px;
  height: 40px;
  margin: 5px;
  border-radius: 5px;
  color: ${({ send }) => (send === "true" ? "dodgerblue" : "white")};
  border: 1px solid white;
  background-color: ${({ send }) => (send === "true" ? "white" : "dodgerblue")};
`;
export const EmailInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const MsgSpan = styled.p<Send>`
  position: absolute;
  margin: 50px 0 0 5px;
  color: white;
  border: none;
  padding: 10px;
  height: 40px;
  border-radius: 0px 10px 10px 10px;
  background-color: ${({ send }) => (send === "true" ? "#1ec957" : "#c91e1e")};
`;
export const EmailChild2Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media(max-width:370px){
    height: 187px;
  }
`