import styled from "@emotion/styled";
import { motion } from "framer-motion";

interface Sect {
  active: true | false;
}

export const ButtonSect = styled(motion.button)<Sect>`
  border: none;
  padding: 10px 15px;
  color: ${({ active }) => (active ? "dodgerblue" : "black")};
  border-bottom: ${({ active }) => (active ? "1px solid dodgerblue" : " none")};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px 5px 0 0;
  background-color: white;
  svg {
    transform: ${({ active }) => (active ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;
export const AskedDiv = styled.div<Sect>`
  font-size: large;
  width: 600px;
  margin: 10px 5px;
  border-radius: 5px;
  border: ${({ active }) =>
    active ? "1px solid dodgerblue" : " 1px solid black"};
    @media (max-width: 613px) {
    width: 500px;
  }
  @media (max-width: 519px) {
    width: 350px;
  }
  @media (max-width: 400px) {
    width: auto;
  }
`;
export const QuestionsDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: large;
  margin-bottom: 50px;
`;
export const QuestionChildDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  h3 {
    color: dodgerblue;
  }
  @media (max-width: 519px) {
    width: 400px;
  }
  @media (max-width: 400px) {
    width: auto;
  }
`;
export const AskedDescript = styled.div<Sect>`
  padding: ${({ active }) => (active ? "10px 15px" : "none")};
`;
export const QuestionsLink = styled.a`
    border-radius: 5px;
    color: white;
    padding: 10px 15px;
    background-color: dodgerblue;
    margin: 20px;
`;
