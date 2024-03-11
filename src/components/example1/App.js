/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import './index.scss';

function App1() {
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5]);
  const ulRef = React.useRef();
  const numberRef =React.useRef();

  numberRef.current = numbers
  
  const addNumber = () => {
    setNumbers((prev) => [...prev, prev[prev.length - 1] + 1]);
  };

  const handleScroll = React.useCallback(() => {
    console.log('Был скролл!', numberRef.current);
  }, [])

  const start = () => {
    ulRef.current.addEventListener('scroll', handleScroll);
  };

  const stop = () => {
    ulRef.current.removeEventListener('scroll', handleScroll);
  };

  return (
    <div>
      <ul ref={ulRef}>
        {numbers.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      <button onClick={addNumber}>✅ Добавить число</button>
      <button onClick={start}>▶️ Старт</button>
      <button onClick={stop}>⏹ Стоп</button>
    </div>
  );
}

export default App1;
