import React, { useState } from 'react';

function Greeting() {
  const [index, setIndex] = useState(0);
  const greetings = ['Hello',"Namskar","Ram Ram", 'Hola', 'Bonjour', 'Ciao'];

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
  };

  return (
    <div>
      <button onClick={handleClick}>Next Greeting</button>
      <h1>{greetings[index]}</h1>
    </div>
  );
}

export default Greeting;
