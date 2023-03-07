///////
import { useState } from 'react';
import './counter.css'
import './index.css'
function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const color = count >= 5 ? 'red' : 'blue';

  return (
    <div  style={{ width: '10rem', height: '10rem', backgroundColor: color , align:'center' }}>
      <h1>{count}</h1>
      
      <button className='button' onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
    

  );
}

export default Counter;

