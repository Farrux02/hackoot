import React, { useState } from "react";
import { Astronaut } from "../../Assets/images";
import Button from "../../Components/Button";
import LoadingCircle from "../../Components/LoadingCircle";
import "./beReady.css";

const BeReady = () => {
  const [isStarted, setIsStarted] = useState(false);

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
      <div className="footer flex justify-between">
        <div className="footer-nickname">Nickname</div>
        <Button
          className="footer-nickname"
          title="Start"
          onClick={() => {
            setIsStarted(true);
          }}
        />
      </div>
    </div>
  );
};

export default BeReady;
