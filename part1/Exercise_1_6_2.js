mport { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all,setAll] = useState(0)
  const [average,setAverage]=useState(0)
  const [percentage,setPercentage]=useState(0)

  const handleClickGood = () => {
    setGood(good+1)
    setAll(all+1)
    setAverage((good-bad)/all)
    setPercentage((good*100)/all)
  }
  const handleClickNeutral = () => {
    setNeutral(neutral+1)
    setAll(all+1)
    setAverage((good-bad)/all)
    setPercentage((good*100)/all)
  }
  const handleClickBad = () => {
    setBad(bad+1)  
    setAll(all+1)
    setAverage((good-bad)/all)
    setPercentage((good*100)/all)
  }
  return(
    <div>
      <h1>give feedback</h1>
      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <br/>
      <p>All: {all}</p>
      <p>Average: {average}</p>
      <p>Percentage: {percentage}%</p>
    </div>
  )
}

export default App