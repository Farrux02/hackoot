import React from "react";
import Preload from "../../Pages/Preload";
import BeReady from "../../Pages/BeReady";
import Quiz from "../../Pages/Quiz";
import { useSelector } from "react-redux";

const Main = () => {
  const isNicknameRedux = useSelector((state) => state.nickname.nickname);
  let timer = 0;

  if (isNicknameRedux) {
    let interval = setInterval(() => {
      timer += 1;
      console.log(timer);
      if (timer === 3) clearInterval(interval);
    }, 1000);
  }

  return (
    <main className="main">
      {/* {isNicknameRedux === null ? (
        <Preload />
      ) : isNicknameRedux !== null && timer === 0 ? (
        <BeReady />
      ) : isNicknameRedux !== null && timer === 3 ? (
        <Quiz />
      ) : null} */}
      {/* {isNicknameRedux === null ? (
        <Preload />
      ) :  isNicknameRedux !== null ? (
        <Quiz />
      ) : null} */}
      <Quiz/>
    </main>
  );
};

export default Main;
