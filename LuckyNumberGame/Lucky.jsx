import React, { useState } from "react";
import styles from "./Lucky.module.css"

function Lucky() {
    const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 5) + 1);
    const [guess, setGuess] = useState("");
    const [attempts, setAttempts] = useState([]);

    const handleGuess = () => {
        const num = parseInt(guess);
        if (isNaN(num) || num < 1 || num > 5) {
            alert("Please enter a valid number between 1 and 5.");
            return;
        }
        if (num === luckyNumber) {
            alert(`Congratulations! You guessed the right number in ${attempts.length + 1} attempts.`);
            setLuckyNumber(Math.floor(Math.random() * 5) + 1);
            setAttempts([]);
            setGuess("");
            return;
        }
        const message = num < luckyNumber ? "You guessed a smaller number." : "You guessed a bigger number.";
        alert(message);
        setAttempts([...attempts, num]);
        setGuess("");
    };

    return (
        <div className={styles.boday}>

            <h1>Guess the Lucky Number!</h1>
            <p>Guess a number between 1 and 5.</p>

            <form onSubmit={(event) => {
                event.preventDefault();
                handleGuess();
            }}>
                <input className={styles.inputBox} placeholder="Guess Lucky Number" type="number" value={guess} onChange={(event) => setGuess(event.target.value)} />
                <button className={styles.button} type="submit">Guess</button>
            </form>

            <p>Number of attempts: {attempts.length}</p>
        </div>
    );
}

export default Lucky;