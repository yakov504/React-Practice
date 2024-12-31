import React from 'react'
import { useState } from 'react';

function App() {

  const [ advice, setAdvice ] = useState('let get started')
  const [ count, setCount ] = useState(0)

  async function getAdvice() {
    
    const data = 'And click ...';
    setCount ((c) => c + 1 );
    setAdvice(data);

  }

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <p>you are clicked {count} times</p>
    </div>
  )
}

export default App;


