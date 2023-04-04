import React from 'react';
import { useRecoilState } from 'recoil';
import { colorState } from './Data';
import styles from "./Recoil.module.css"

function RecoilClr() {
    const [color, setColor] = useRecoilState(colorState);

    const handleClick = () => {
        setColor(color === 'red' ? 'blue' : 'red');
    };

    return (
        <div className={styles.body}>
            <h1 style={{ color }}>  ! छत्रपती शासन !</h1>
            <button className={styles.button} onClick={handleClick}>Change Color</button>
        </div>
    );
}

export default RecoilClr;
