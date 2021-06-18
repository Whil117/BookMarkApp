import React, { FC } from "react";
import {
  QuestionChildDiv,
  QuestionsDiv,
  QuestionsLink,
} from "../../styles/Questions/QuestionsStyle";
import Asked from "./components/Asked";

const data = {
  title: [
    "What is Bookmark",
    "How can i request a new browser?",
    "Is there a mobile app?",
    "What about other chromium browsers",
  ],
  descript:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium magnam quisquam dolor doloribus earum asperiores maxime veniam eius sint aperiam, labore omnis non officia. Impedit excepturi nesciunt natus possimus atque!",
};

const Questions: FC = () => {
  return (
    <QuestionsDiv initial={{ opacity: 0 }}  animate={{ x: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }}>
      <QuestionChildDiv>
        <h3>Frequently Asked Questions</h3>
        <p>
          Here are some of our FAQs. If you have any other questions you´d like
          answered please feel free to email us.
        </p>
      </QuestionChildDiv>
      <div>
        <Asked title={data.title[0]} descript={data.descript} />
        <Asked title={data.title[1]} descript={data.descript} />
        <Asked title={data.title[2]} descript={data.descript} />
        <Asked title={data.title[3]} descript={data.descript} />
      </div>

      <QuestionsLink href="#"> More Info</QuestionsLink>
    </QuestionsDiv>
  );
};

export default Questions;
