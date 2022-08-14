import React from "react";
import AnswerList from "../AnswerList";

const ActiveQuiz = ({ question, answers, onAnswerClick }) => {
  return (
    <div>
      <div className="quiz-question">{question}</div>
      <AnswerList answers={answers} onAnswerClick={onAnswerClick} />
    </div>
  );
};

export default ActiveQuiz;
