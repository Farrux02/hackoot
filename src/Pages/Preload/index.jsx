import React, { useState, useRef } from "react";
import Button from "../../Components/Button";
import { Logo } from "../../Assets/images";
import FormInput from "../../Components/FormInput";
import "./preload.css";

const Preload = () => {
  const [isInGame, setIsInGame] = useState(false);
  const gamePin = useRef(Math.floor(Math.random() * 9999999 + 1111111));
  const inputsValues = {
    gamePin: "",
    nickName: "",
  };
  const [values, setValues] = useState(inputsValues);

  console.log(gamePin.current);
  return (
    <section className="preload">
      <div className="container">
        <div className="preload-logo flex justify-center">
          <img className="logo-img" src={Logo} alt="" />
        </div>
        {isInGame === false ? (
          <div className="preload-form-wrapper flex justify-center">
            <form className="preload-form">
              <FormInput
                required
                type="text"
                placeholder="Enter game PIN"
                className="preload-input"
                name="gamePin"
                value={values.gamePin}
                maxLength={7}
                handleChange={(e) => {
                  setValues({ ...values, gamePin: e.target.value });
                }}
              />
              <Button
                title="Enter"
                className="preload-button"
                onClick={(e) => {
                    e.preventDefault();
                    gamePin.current === +values.gamePin && setIsInGame(true);
                }}
              />
            </form>
          </div>
        ) : (
          <div className="preload-form-wrapper flex justify-center">
            <form className="preload-form">
              <FormInput
                required
                type="text"
                placeholder="Nickname"
                className="preload-input"
                name="nickName"
                value={values.nickName}
                maxLength={7}
                handleChange={(e) => {
                  setValues({ ...values, nickName: e.target.value });
                }}
              />
              <Button title="Enter" className="preload-button" onClick={(e) => {
                e.preventDefault();
              }} />
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Preload;
