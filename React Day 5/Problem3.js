import { useState } from 'react';

export default function NameSwitcher() {
    const [name, setName] = useState('Amit');

    function handleClick() {
        setName(name === 'Amit' ? 'Rajan' : 'Amit');
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>My name is : {name}</h1>

            <button style={{ padding: "12px" }} onClick={handleClick}>Chanje Name</button>
        </div>
    );
}