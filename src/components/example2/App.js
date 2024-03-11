import React from 'react';
import Buttons from './Buttons.jsx';

import './index.scss';

function App3() {
  const [count, setCounter] = React.useState(0);

  const onPlus = React.useCallback(() => setCounter((count) => count + 1), [])

  const onMinus = React.useCallback(() => setCounter((count) => count - 1), [])

  return (
    <div className="App">
      <h1>{count}</h1>
      <Buttons onPlus={onPlus} onMinus={onMinus} />
    </div>
  );
}

export default App3;
