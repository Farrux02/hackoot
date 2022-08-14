import React from "react";
import AnswerItem from "../AnswerItem";

const AnswerList = ({ answers, onAnswerClick, isCorrect, answerState, correctAnsw, incorrectAnsw }) => {
  console.log(answers);
  return (
    <ul className="quiz-answers flex flex-wrap justify-center gap-4">
      {answers.map((answer) => (
        <AnswerItem
          key={answer.id}
          answer={answer}
          isCorrect={isCorrect}
          onAnswerClick={onAnswerClick}
          answerState={answerState ? answerState[answer.id] : null}

        />
      ))}
    </ul>
  );
};

export default AnswerList;
