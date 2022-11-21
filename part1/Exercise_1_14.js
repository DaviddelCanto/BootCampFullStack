import React, { useState } from 'react'

const Header =({name}) => <h1>{name}</h1>

const Winner =({votos})=>{
  const maxPuntos=Math.max(...votos)
  const ganador=votos.indexOf(maxPuntos)
  if (maxPuntos === 0){
    return(
      <h2>No votes yet</h2>
    )
  }
  return (
    <h2>{anecdotes[ganador]}</h2>
  )
}

const App = (props) => {
  const  [votos,setVotos] = useState (new Uint8Array(anecdotes.length))
  const [selected, setSelected] = useState(0)



  const handleClick =() =>{
    const arrayIndex =Math.floor(Math.random()*anecdotes.length) 
    setSelected(arrayIndex)
  }
  const handleClickVote =() =>{
    const votosOrigen =[...votos]
    votosOrigen[selected] +=1
    setVotos(votosOrigen)
  }

  return (
    <div>
      <Header name="Anecdote of the day"/>
      <h2>{anecdotes[selected]}</h2>
      <h2>has {votos[selected]} votes</h2>
      <button onClick={handleClickVote} >vote</button> 
      <button onClick={handleClick}>Next anecdote</button>
      <Header name="Anecdote with most votes"/>
      <Winner votos={votos}/> 
    </div>
  )
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]  
  export default App;