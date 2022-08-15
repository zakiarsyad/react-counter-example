import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)

  const minus = () => {
    console.log('minus click')
    setCounter(counter - 1)
  }

  const add = () => {
    console.log('add click')
    setCounter(counter + 1)
  }

  return (
    <div className='App'>
      <button onClick={minus}>-</button>
      <h1>{counter}</h1>
      <button onClick={add}>+</button>
    </div>
  );
}

export default App;
