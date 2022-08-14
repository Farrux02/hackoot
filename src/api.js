import axios from "axios";

const getQuizList = () => {
  axios.get(`https://12e0-87-237-239-49.in.ngrok.io/quiz/`).then((res) => {
    return res.data;
  });
};

const getQuestions = (quiz_id) => {
  axios
    .get(`https://12e0-87-237-239-49.in.ngrok.io/quiz/${quiz_id}`)
    .then((res) => {
      return res.data;
    });
};

const postUser = () => {
    axios
      .get(`https://12e0-87-237-239-49.in.ngrok.io/user/`)
      .then((res) => {
        return res.data;
      });
  };

export { getQuizList, getQuestions };
