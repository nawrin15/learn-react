import React from 'react'
import { useState } from 'react';

export default function Hook_useState2() {
  const [count, setCount] = useState(0);
  return (
    <div>
        <h1>count: {count}</h1>
        <button onClick={setCount}> Increment </button>
    </div>
  )
}
