import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  const [counters,setCounters] = useState({
    left:0,
    right:0,
    clicks:0
  })
  const handleClickLeft = () =>{
    const newCounterState ={
      left : counters.left+1,
      right : counters.right,
      clicks : counters.clicks+1
    }
    setCounters(newCounterState)
  }
  const handleClickRight = () =>{
    setCounters({
      left : counters.left,
      right : counters.right+1,
      clicks : counters.clicks+1
    })
  }
  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={(handleClickRight)}>right</button>
      {counters.right}
      <br></br>
      <p>Clicks totales: {counters.clicks}</p>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);