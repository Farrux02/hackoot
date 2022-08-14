import React from "react";

const AnswerList = ({ answers, onAnswerClick }) => {
  console.log(answers);
  return (
    <ul className="quiz-answers flex flex-wrap justify-center gap-4">
      {answers.map((answer, index) => (
        <li className="quiz-answer" key={index} onClick={() => onAnswerClick(answer.id)}>
          {answer.text}
        </li>
      ))}
    </ul>
  );
};

export default AnswerList;
