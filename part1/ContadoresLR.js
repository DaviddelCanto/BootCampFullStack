import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const WarningNotUsed =()=>{
  return <h1>Todavía no se ha usado el contador</h1>
}

const ListofClicks=({clicks})=>{
  // console.log({clicks})
  // debugger
  return <h1>{clicks.join(', ')}</h1>
}
const App = () => {
 
  const [counters,setCounters] = useState({
    left:0,
    right:0,
    mensaje: 'Mensaje en el estado'
  })
  const [clicks,setClicks] = useState([])

  const handleClickLeft = (event) =>{
    event.preventDefault()
    const newCounterState ={
      ...counters,
      left : counters.left+1
    }
    setCounters(newCounterState);
    setClicks(prevClicks => [...prevClicks,'L'])
  }

  const handleClickRight = () =>{
    setCounters({
      ...counters,
      right : counters.right+1
    });
    setClicks(prevClicks => [...prevClicks,'R'])
  }

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={(handleClickRight)}>right</button>
      {counters.right}
      <br></br>
      <p>Clicks totales: {clicks.length}</p>
      {clicks.length===0 ? (
        <WarningNotUsed />
      )  : (
        <ListofClicks clicks={clicks} />
      )}
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
