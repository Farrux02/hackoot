import React from 'react';

const AnswerItem = ({onAnswerClick, answer, answerState}) => {
    const cls = ['quiz-answer']

    if (answerState) {
        cls.push(answerState)
    }

    return (
        <li className={cls.join(' ')} key={answer.id} onClick={() => onAnswerClick(answer.id)}>
          {answer.text}
        </li>
    );
}

export default AnswerItem;
