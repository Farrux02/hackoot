import React, { useState } from "react";
import { Astronaut } from "../../Assets/images";
import Button from "../../Components/Button";
import LoadingCircle from "../../Components/LoadingCircle";
import "./beReady.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BeReady = () => {
  const [isStarted, setIsStarted] = useState(false);
  const redirect = useNavigate();
  const nickname = useSelector(state => state.nickname.nickname)

  const { quiz_id } = useParams();

  if (isStarted) {
    setTimeout(() => {
      redirect(`/quiz/${quiz_id}`);
    }, 3000);
  }

  return (
    <div className="be-ready">
      {!isStarted ? (
        <div className="container">
          <div className="be-ready__astronaut flex justify-center">
            <img
              className="be-ready__astronaut-img"
              src={Astronaut}
              alt="astronaut"
            />
          </div>
          <div className="be-ready__title">
            <p className="be-ready__title-text">Ты в игре!</p>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="ready-title">
            <p className="ready-title__text">Приготовься!</p>
          </div>
          <div className="loading-circle flex justify-center">
            <LoadingCircle />
          </div>
          <div className="ready-title__loading">
            <p className="ready-title__loading-text">Загрузка...</p>
          </div>
        </div>
      )}
      <div className="footer">
        <div className="container flex justify-between">
          <div className="footer-nickname">{nickname}</div>
          <Button
            className="footer-nickname"
            title="Start"
            onClick={() => {
              setIsStarted(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BeReady;
