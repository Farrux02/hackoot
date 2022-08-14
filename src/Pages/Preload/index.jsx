import React, { useState, useRef } from "react";
import Button from "../../Components/Button";
import { Logo } from "../../Assets/images";
import FormInput from "../../Components/FormInput";
import "./preload.css";
import { useDispatch, useSelector } from "react-redux";
import { isNickname } from "../../redux/reducers/nicknameReducer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { user } from "../../redux/reducers/userReducer";

const Preload = () => {
  const [isInGame, setIsInGame] = useState(false);
  const gamePinGenerator = useRef(
    Math.floor(Math.random() * 9999999 + 1111111)
  );
  const { quiz_id } = useParams();
  const [gamePin, setGamePin] = useState("");
  const inputsValues = {
    user_name: "",
    points: 0,
  };
  const [values, setValues] = useState(inputsValues);

  const isNicknameRedux = useSelector((state) => state.nickname.nickname);

  const dispatch = useDispatch();

  console.log(isNicknameRedux);

  console.log(gamePinGenerator.current);
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
                value={gamePin}
                maxLength={7}
                handleChange={(e) => {
                  // setValues({ ...values, gamePin: e.target.value });
                  setGamePin(e.target.value);
                }}
              />
              <Button
                title="Enter"
                className="preload-button"
                onClick={(e) => {
                  e.preventDefault();
                  gamePinGenerator.current === +gamePin && setIsInGame(true);
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
                value={values.user_name}
                handleChange={(e) => {
                  setValues({ ...values, user_name: e.target.value });
                }}
              />
              <button
                className="preload-button"
                onClick={(e) => e.preventDefault()}
              >
                <Link
                  to={`/ready/${quiz_id}`}
                  onClick={() => {
                    dispatch(isNickname(values.user_name));
                    dispatch(user(values));
                  }}
                >
                  Enter
                </Link>
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Preload;
