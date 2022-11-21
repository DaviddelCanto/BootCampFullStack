import logo from './logo.svg';
import './App.css';

import { useState } from 'react'

const statistics = (props) => {
  const good = props.good
  const neutral = props.neutral  
  const bad = props.bad  


  const All = () => (good + neutral + bad)
  const Average = () =>(good-bad)/All
  const Percentage = () =>(good*100)/All

  return (
      <div>
        <br/>
        <h1>statistics</h1>
        <p>All: {All}</p>
        <p>Average: {Average}</p>
        <p>Percentage: {Percentage}%</p>
      </div>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good+1)    
  }
  const handleClickNeutral = () => {
    setNeutral(neutral+1)    
  }
  const handleClickBad = () => {
    setBad(bad+1)      
  }
  return(
    <div>
      <h1>give feedback</h1>
      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      {statistics}
    </div>
  )
}

export default App;
