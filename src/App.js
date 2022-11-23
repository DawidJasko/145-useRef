import React, { useRef, createRef, useState, useEffect } from 'react';

import './style.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const textInputRef = useRef();

  useEffect(() => {
    return () => (textInputRef.current = false);
  }, []);
  const numberInputRef = createRef();

  const focusOnInput = () => textInputRef.current.focus();
  const increaseCounter = () => setCounter(counter + 1);

  useEffect(() => {
    // textInputRef.current.focus();
  }, []);

  console.log(textInputRef.current);
  console.log(numberInputRef.current);

  return (
    <div>
      <input ref={textInputRef} type="text" />
      <input ref={numberInputRef} type="number" />
      <button onClick={focusOnInput}>Ustaw focus na input</button>
      <button onClick={increaseCounter}>Przerenderuj komponent</button>
    </div>
  );
};

export default App;
