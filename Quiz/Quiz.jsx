import React, { useState } from 'react'
import QuizData from './QuizData';
import QuizResult from './QuizResult';
import styles from "./Quiz.module.css"
function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
        } else {
            setShowResult(true)
        }
    }
    const updateScore = () => {
        if (clickedOption === QuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    }
    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
    return (
        <div>
            <p className={styles.heading_txt}>Quiz APP</p>
            <div className={styles.container}>
                {showResult ? (
                    <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
                ) : (
                    <>
                        <div className={styles.question}>
                            <span id={styles.question_number}>{currentQuestion + 1}. </span>
                            <span id={styles.question_txt}>{QuizData[currentQuestion].question}</span>
                        </div>
                        <div className={styles.option_container}>
                            {QuizData[currentQuestion].options.map((option, i) => {
                                return (
                                    <button
                                        // className="option-btn"

                                        className={`option-btn ${clickedOption === i + 1 ? "checked" : null
                                            }`}
                                        key={i}
                                        onClick={() => setClickedOption(i + 1)}
                                    >
                                        {option}
                                    </button>
                                )
                            })}
                        </div>
                        <input type="button" value="Next" id={styles.next_button} onClick={changeQuestion} />
                    </>)}
            </div>
        </div>
    )
}

export default Quiz;

