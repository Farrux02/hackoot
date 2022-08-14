import React from "react";
import { useSelector } from "react-redux";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import "./adminPanel.css";

const AdminPanel = () => {
  const quiz = useSelector((state) => state.quiz.quiz);

  console.log(quiz);
  return (
    <div className="admin-panel">
      <div className="container">
        <ul className="quiz-list flex flex-wrap mt-8 gap-x-6">
          {quiz.map((quizList) => (
            <li
              className="quiz-list__item flex flex-col items-center gap-y-4"
              key={quizList.id}
            >
              <img src={quizList.quiz_photo} alt="" />
              {quizList.label}
              <Link to={`/preload/${quizList.id}`} className="quiz-list__btn">
                Начать
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
