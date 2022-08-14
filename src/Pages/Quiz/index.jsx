import React, { useState, useEffect } from "react";
import "./quiz.css";
import { Logo } from "../../Assets/images";
import { Button } from "@mui/material";
import ActiveQuiz from "../../Components/ActiveQuiz";
import { useSelector } from "react-redux";
import axios from "axios";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [seconds, setSeconds] = useState(20);
  const isNicknameRedux = useSelector((state) => state.nickname.nickname);
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



  const onAnswerClickHandler = (answerId) => {
    console.log("Answer Id: ", answerId);

    if (quiz[activeQuestion].rightAnswerId === answerId) {
      setActiveQuestion(activeQuestion + 1);
    }
  };

  return (
    <div className="quiz">
      <div className="container">
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
          <ActiveQuiz
            question={quiz[activeQuestion].question}
            answers={quiz[activeQuestion].answers}
            onAnswerClick={onAnswerClickHandler}
          />
        </div>
      </div>
      <div className="footer flex justify-between">
        <div className="footer-nickname">{isNicknameRedux}</div>
      </div>
    </div>
  );
};

export default Quiz;
