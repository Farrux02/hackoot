import React, { useState, useEffect, useMemo } from "react";
import "./quiz.css";
import { Logo } from "../../Assets/images";
import { Button } from "@mui/material";
import ActiveQuiz from "../../Components/ActiveQuiz";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import isCorrectReducer from "../../redux/reducers/isCorrectReducer";
import user from "../../redux/reducers/userReducer";
import axios from "axios";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [seconds, setSeconds] = useState(20);
  const isNicknameRedux = useSelector((state) => state.nickname.nickname);
  const userRedux = useSelector((state) => state.user.user);
  const [isFinished, setIsFinished] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnsw, setCorrectAnsw] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const userValues = {
    user_name: isNicknameRedux,
    points: userRedux[0].points,
  };
  const [values, setValues] = useState(userValues);

  console.log(userRedux[0].points);

  const scorePerAnswer = 10;

  const { quiz_id } = useParams();

  const dispatch = useDispatch();
  console.log(isCorrect);

  const quizRedux = useSelector((state) => state.quiz.quiz);
  const quiz = quizRedux.filter((quizList) => quizList.id === +quiz_id);

  console.log(quiz[0].questions.length);

  const [incorrectAnsw, setInCorrectAnsw] = useState(quiz[0].questions.length);

  // const getQuizList = () => {
  //   axios
  //     .get(`https://12e0-87-237-239-49.in.ngrok.io/quiz/`)
  //     .then((res) => console.log(res.data));
  // };

  // useEffect(() => {
  //   getQuizList();
  // }, []);

  useEffect(() => {
    setTotalScore(scorePerAnswer * correctAnsw);
    console.log(values);
  }, [correctAnsw, values]);

  // useMemo(() => {
  //   return setValues({ ...values, points: totalScore });
  // }, [totalScore, values]);

  // dispatch(user(values))

  const isQuizFinished = () => {
    return activeQuestion + 1 === quiz[0].questions.length;
  };

  const onAnswerClickHandler = (answerId) => {
    const question = quiz[0].questions[activeQuestion];
    console.log(activeQuestion);
    if (question.rightAnswerId === answerId) {
      setCorrectAnsw(correctAnsw + 1);
      setInCorrectAnsw(incorrectAnsw - 1);
      // console.log(quiz[0].questions.length);
      if (isQuizFinished()) {
        setIsFinished(true);
        // dispatch(user(values))
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
            <p>Your score: {totalScore}</p>
          </>
        ) : (
          <>
            <div className="answer-number">
              {activeQuestion + 1}/{quiz[0].questions.length}
            </div>
            <div className="question-time flex items-center justify-center">
              {seconds}
            </div>
            <div className="quiz-logo">
              <img className="quiz-logo__img" src={Logo} alt="logo" />
            </div>
            <div className="quiz-wrapper">
              <ActiveQuiz
                question={quiz[0].questions[activeQuestion].question}
                answers={quiz[0].questions[activeQuestion].answers}
                isCorrect={isCorrect}
                onAnswerClick={onAnswerClickHandler}
                answerState={isCorrect}
              />
            </div>
          </>
        )}
      </div>
      <div className="footer">
        <div className="container flex justify-between">
          <div className="footer-nickname">{isNicknameRedux}</div>
          {/* <div className="footer-score">{userRedux[0].points}</div> */}
          <div className="footer-score">299</div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
