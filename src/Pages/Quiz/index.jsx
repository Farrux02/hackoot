import React, { useState, useEffect } from "react";
import "./quiz.css";
import { Logo } from "../../Assets/images";
import { Button } from "@mui/material";
import ActiveQuiz from "../../Components/ActiveQuiz";
import { useSelector, useDispatch } from "react-redux";
import isCorrectReducer from "../../redux/reducers/isCorrectReducer";
import axios from "axios";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [seconds, setSeconds] = useState(20);
  const isNicknameRedux = useSelector((state) => state.nickname.nickname);
  const [isFinished, setIsFinished] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnsw, setCorrectAnsw] = useState(0);
  const [incorrectAnsw, setInCorrectAnsw] = useState(0);

  const dispatch = useDispatch();
  console.log(isCorrect);

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
    {
      question: "Столица Франции?",
      rightAnswerId: 1,
      id: 3,
      answers: [
        { text: "Париж", id: 1 },
        { text: "Люксембург", id: 2 },
        { text: "Марсель", id: 3 },
        { text: "Лилль", id: 4 },
      ],
    },
    {
      question: "Сколько месяцев в году имеют 27 дней?",
      rightAnswerId: 3,
      id: 4,
      answers: [
        { text: "Один", id: 1 },
        { text: "Три", id: 2 },
        { text: "Двеннадцать", id: 3 },
        { text: "Пять", id: 4 },
      ],
    },
    {
      question: "Сколько людей основали MARS IT School?",
      rightAnswerId: 3,
      id: 4,
      answers: [
        { text: "Один", id: 1 },
        { text: "Два", id: 2 },
        { text: "Три", id: 3 },
        { text: "Пять", id: 4 },
      ],
    },
  ]);

  console.log(quiz.length);

  // const getQuizList = () => {
  //   axios
  //     .get(`https://12e0-87-237-239-49.in.ngrok.io/quiz/`)
  //     .then((res) => console.log(res.data));
  // };

  // useEffect(() => {
  //   getQuizList();
  // }, []);

  const isQuizFinished = () => {
    return activeQuestion + 1 === quiz.length;
  };

  const onAnswerClickHandler = (answerId) => {
    const question = quiz[activeQuestion];
    console.log(activeQuestion);
    if (question.rightAnswerId === answerId) {
      setCorrectAnsw(correctAnsw + 1);
      setInCorrectAnsw(quiz.length - correctAnsw);
      if (isQuizFinished()) {
        setIsFinished(true);
      } else {
        setIsCorrect({ [answerId]: "correct-answer" });
        setTimeout(() => {
          setActiveQuestion(activeQuestion + 1);
          setIsCorrect(null);
        }, 2000);
      }
    }
    if (question.rightAnswerId !== answerId) {
      if (isQuizFinished()) {
        setIsFinished(true);
      } else {
        setIsCorrect({ [answerId]: "incorrect-answer" });
        setTimeout(() => {
          setActiveQuestion(activeQuestion + 1);
          setIsCorrect(null);
        }, 2000);
      }
    }
  };

  return (
    <div className="quiz">
      <div className="container">
        {isFinished ? (
          <>
            <h1>Correct: {correctAnsw}</h1>
            <h1>Incorrect: {incorrectAnsw}</h1>
          </>
        ) : (
          <>
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
                isCorrect={isCorrect}
                onAnswerClick={onAnswerClickHandler}
                answerState={isCorrect}
              />
            </div>
          </>
        )}
      </div>
      <div className="footer flex justify-between">
        <div className="footer-nickname">{isNicknameRedux}</div>
      </div>
    </div>
  );
};

export default Quiz;
