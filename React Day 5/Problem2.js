import React, { useState } from 'react'

export default function Problem2() {
    const [count, setCount] = useState(0);

    function handleIncrement() {

        setCount(count + 1)

    }
    function handleDecrement() {

        setCount(count - 1)

    }

    return (
        <div style={{ fontSize: "36px", textAlign: "center" }}>

            <p style={{ color: "red" }}>{count}</p>
            <div>
                <button style={{ padding: "16px", margin: "12px" }} onClick={handleIncrement} className='increase'>increaseCount</button>
                <button style={{ padding: "16px" }} onClick={handleDecrement} className='decrease'>decreaseCount</button>
            </div>
        </div>
    )
}
