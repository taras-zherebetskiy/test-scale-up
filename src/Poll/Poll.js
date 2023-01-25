import React, { useState } from 'react';
import './Poll.scss';

const questions = [
    {
        question: 'Avete mai usato un Set Bracciale Sogna in Grande?',
        answer: null,
        num: 1,
    },
    {
        question: 'Avete mai usato un Set Bracciale Sogna in Grande?',
        answer: null,
        num: 2,
    },
    {
        question: 'Avete mai usato un Set Bracciale Sogna in Grande?',
        answer: null,
        num: 3,
    },
]


export const Poll = () => {
    const [questionData, setQuestionData] = useState(questions[0]);

    const handlerClick = (e) => {
        const num = questionData.num;
        questions[num - 1].answer = e.target.value;
        if (num === 3) {
            window.location.replace('vnm45rtghost.com');
            console.log(questions);
        } else {
            setQuestionData(questions[num]);
        }
    }

    return (
        <div className="Poll">

            <span className='Poll__step'>Domanda {questionData.num}/3:</span>
            <span className='Poll__question'>{questionData.question}</span>


            <div className='Poll__line' />

            <button
                className='Poll__button'
                onClick={handlerClick}
                value={true}
            >
                Sì
            </button>

            <button
                className='Poll__button'

                onClick={handlerClick}
                value={false}
            >
                No
            </button>
        </div >
    )
};