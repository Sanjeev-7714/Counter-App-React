import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
   
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };
   
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };
   
  // Change background color based on count value
  useEffect(() => {
    const hue1 = ((count * 5) % 360 + 360) % 360;
    const hue2 = ((count * 7) % 360 + 360) % 360;
    document.body.style.background = `linear-gradient(135deg, 
      hsl(${hue1}, 70%, 70%), 
      hsl(${hue2}, 70%, 65%)
    )`;
  }, [count]);
   
  return (
    <div className="container">
      <h1>React Counter</h1>
      <div 
        className="counter-value"
        style={{ transform: count % 5 === 0 && count !== 0 ? 'scale(1.1)' : 'scale(1)' }}
      >
        {count}
      </div>
      <div className="buttons">
        <button 
          className="decrement" 
          onClick={decrement}
          aria-label="Decrement counter"
        >
          −
        </button>
        <button 
          className="increment" 
          onClick={increment}
          aria-label="Increment counter"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;