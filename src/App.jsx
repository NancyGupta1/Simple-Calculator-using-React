import { useState } from 'react'
import './App.css'
import img from './assets/file.jpg'

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const operate = (op) => {
    const number = parseFloat(input);
    if (isNaN(number)) return;

    switch (op) {
      case 'add':
        setResult(result + number);
        break;
      case 'multiply':
        setResult(result * number);
        break;
      case 'subtract':
        setResult(result - number);
        break;
      case 'divide':
        setResult(result / number);
        break;
      default:
        break;
    }
  };

  return (
    <div className="calculator">
      {/* <img height ="200px" src={img} alt="img" /> */}
      <h1>Simple Calculator</h1>
      <div className="result">{result}</div>
      <input
        type="number"
        value={input}
        onChange={handleChange}
        placeholder="Enter number"
      />
      <div className="card">
        <button onClick={() => operate('add')}>Add</button>
        <button onClick={() => operate('multiply')}>Multiply</button>
        <button onClick={() => operate('subtract')}>Subtract</button>
        <button onClick={() => operate('divide')}>Divide</button>
        <button className="reset-btn" onClick={() => setInput('')}>Reset Input</button>
        <button className="reset-btn" onClick={() => setResult(0)}>Reset Result</button>
      </div>
    </div>
  )
}

export default App
