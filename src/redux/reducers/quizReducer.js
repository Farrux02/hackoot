import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quiz: [
    {
      id: 1,
      label: 'Первый тест',
      quiz_photo: 'http://artinblog.ru/uploads/posts/2013-04/1367159240_300x200.jpg',
      questions: [
        {
          question: "Какого цвета небо?",
          rightAnswerId: 2,
          id: 1,
          answers: [
            { text: "Черный", id: 1 },
            { text: "Синий", id: 2 },
            { text: "Красный", id: 3 },
            { text: "Зеленый", id: 4 },
          ],
        },
        {
          question: "В каком году основали Санкт-Петербург?",
          rightAnswerId: 3,
          id: 2,
          answers: [
            { text: "1700", id: 1 },
            { text: "1702", id: 2 },
            { text: "1703", id: 3 },
            { text: "1803", id: 4 },
          ],
        },
        {
          question: "Столица Франции?",
          rightAnswerId: 1,
          id: 3,
          answers: [
            { text: "Париж", id: 1 },
            { text: "Люксембург", id: 2 },
            { text: "Марсель", id: 3 },
            { text: "Лилль", id: 4 },
          ],
        },
        {
          question: "Сколько месяцев в году имеют 27 дней?",
          rightAnswerId: 3,
          id: 4,
          answers: [
            { text: "Один", id: 1 },
            { text: "Три", id: 2 },
            { text: "Двеннадцать", id: 3 },
            { text: "Пять", id: 4 },
          ],
        },
        {
          question: "Сколько людей основали MARS IT School?",
          rightAnswerId: 3,
          id: 4,
          answers: [
            { text: "Один", id: 1 },
            { text: "Два", id: 2 },
            { text: "Три", id: 3 },
            { text: "Пять", id: 4 },
          ],
        },
      ],
    },
    {
        id: 2,
        label: 'Второй тест',
        quiz_photo: 'http://artinblog.ru/uploads/posts/2013-04/1367159240_300x200.jpg',
        questions: [
          {
            question: "Какого цвета солнце?",
            rightAnswerId: 2,
            id: 1,
            answers: [
              { text: "Черный", id: 1 },
              { text: "Желтый", id: 2 },
              { text: "Красный", id: 3 },
              { text: "Зеленый", id: 4 },
            ],
          },
          {
            question: "В каком году Узбекистан обрел независимость?",
            rightAnswerId: 3,
            id: 2,
            answers: [
              { text: "1900", id: 1 },
              { text: "1992", id: 2 },
              { text: "1991", id: 3 },
              { text: "1999", id: 4 },
            ],
          },
          {
            question: "Столица Узбекистана?",
            rightAnswerId: 1,
            id: 3,
            answers: [
              { text: "Ташкент", id: 1 },
              { text: "Бухара", id: 2 },
              { text: "Самарканд", id: 3 },
              { text: "Андижан", id: 4 },
            ],
          },
          {
            question: "Сколько месяцев в году?",
            rightAnswerId: 3,
            id: 4,
            answers: [
              { text: "Один", id: 1 },
              { text: "Три", id: 2 },
              { text: "Двеннадцать", id: 3 },
              { text: "Пять", id: 4 },
            ],
          },
          {
            question: "Сколько филиалов MARS IT School на данный момент?",
            rightAnswerId: 2,
            id: 4,
            answers: [
              { text: "Один", id: 1 },
              { text: "Два", id: 2 },
              { text: "Три", id: 3 },
              { text: "Пять", id: 4 },
            ],
          },
        ],
      },
      {
        id: 3,
        label: 'Третий тест',
        quiz_photo: 'http://artinblog.ru/uploads/posts/2013-04/1367159240_300x200.jpg',
        questions: [
          {
            question: "Главный персонаж фильма 'Железный человек'?",
            rightAnswerId: 2,
            id: 1,
            answers: [
              { text: "Капитан Америка", id: 1 },
              { text: "Железный человек", id: 2 },
              { text: "Халк", id: 3 },
              { text: "Хэппи Хоган", id: 4 },
            ],
          },
          {
            question: "Максимальный возраст учеников MARS IT School?",
            rightAnswerId: 3,
            id: 2,
            answers: [
              { text: "18", id: 1 },
              { text: "14", id: 2 },
              { text: "16", id: 3 },
              { text: "12", id: 4 },
            ],
          },
          {
            question: "Какой климат в Узбекистани?",
            rightAnswerId: 1,
            id: 3,
            answers: [
              { text: "Сухой", id: 1 },
              { text: "Влажный", id: 2 },
              { text: "Переменный", id: 3 },
              { text: "Жаркий", id: 4 },
            ],
          },
          {
            question: "Какая переменная не существует в JS?",
            rightAnswerId: 3,
            id: 4,
            answers: [
              { text: "var", id: 1 },
              { text: "let", id: 2 },
              { text: "bool", id: 3 },
              { text: "const", id: 4 },
            ],
          },
          {
            question: "Основатель компании Amazon?",
            rightAnswerId: 3,
            id: 4,
            answers: [
              { text: "Марк Цукерберг", id: 1 },
              { text: "Билл Гейтс", id: 2 },
              { text: "Джеф Безос", id: 3 },
              { text: "Стив Джобс", id: 4 },
            ],
          },
        ],
      },
  ],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    quizRedux(state, action) {
      return {
        ...state,
        quiz: action.payload,
      };
    },
  },
});

export const { quizRedux } = quizSlice.actions;
export default quizSlice.reducer;
