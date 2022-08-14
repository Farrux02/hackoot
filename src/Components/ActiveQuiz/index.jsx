import React from "react";
import AnswerList from "../AnswerList";

const ActiveQuiz = ({
  question,
  answers,
  onAnswerClick,
  isCorrect,
  answerState,

}) => {
  return (
    <div>
      <div className="quiz-question">{question}</div>
      <AnswerList
        answers={answers}
        onAnswerClick={onAnswerClick}
        isCorrect={isCorrect}
        answerState={answerState}

      />
    </div>
  );
};

export default ActiveQuiz;
