import React from 'react'
import styles from "./Quiz.module.css"
function QuizResult(props) {
  return (
    <>
      <div className={styles.show_score}>
        Your Score:{props.score}<br />
        Total Score:{props.totalScore}
      </div>
      <button id={styles.next_button} onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult;