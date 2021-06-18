import { FC } from "react";
import Questions from "../components/AskedQuestions/Questions";
import { Mail } from "../components/Email/Mail";
import Extension from "../components/Extension/Extension";
import Features from "../components/Features/Features";
import { Footer } from "../components/Footer/Footer";
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
      <Mail/>
      <Footer/>
    </main>
  );
};

export default BookMark;
