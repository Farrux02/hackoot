import React, { useState } from "react";
import "./quiz.css";
import { Logo } from "../../Assets/images";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [seconds, setSeconds] = useState(20);
  const [quiz, setQuiz] = useState([
    {
      question: "Какого цвета небо?",
      rightAnswerId: 2,
      id: 1,
      answers: [
        { text: "Черный", id: 1 },
        { text: "Синий", id: 2 },
        { text: "Красный", id: 3 },
        { text: "Зеленый", id: 4 },
      ],
    },
    {
      question: "В каком году основали Санкт-Петербург?",
      rightAnswerId: 3,
      id: 2,
      answers: [
        { text: "1700", id: 1 },
        { text: "1702", id: 2 },
        { text: "1703", id: 3 },
        { text: "1803", id: 4 },
      ],
    },
  ]);

  return (
    <div className="quiz">
      <div className="answer-number">
        {activeQuestion + 1}/{quiz.length}
      </div>
      <div className="question-time flex items-center justify-center">
        {seconds}
      </div>
      <div className="quiz-logo">
        <img className="quiz-logo__img" src={Logo} alt="logo" />
      </div>
      <div className="quiz-wrapper">
        <div className="quiz-question">Is hakoot the best project?</div>
        <div className="quiz-answers flex flex-wrap justify-center">
            <div className="quiz-answer quiz-answer__1"></div>
            <div className="quiz-answer quiz-answer__2"></div>
            <div className="quiz-answer quiz-answer__3"></div>
            <div className="quiz-answer quiz-answer__4"></div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
