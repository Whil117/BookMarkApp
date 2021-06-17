import { FC } from "react";
import Questions from "../components/AskedQuestions/Questions";
import Extension from "../components/Extension/Extension";
import Features from "../components/Features/Features";
import HomePage from "../components/Home/HomePage";
import Nav from "../components/Nav/Nav";


const BookMark: FC = () => {
  return (
    <main>
      <Nav />
      <HomePage />
      <Features/>
      <Extension />
      <Questions/>
    </main>
  );
};

export default BookMark;
