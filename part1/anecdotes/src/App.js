import {useState} from "react";

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([])
  const [maxpoints, setMaxpoints] = useState(0)
  const nextAnecdote = () => {
    let randAnecdote = Math.floor(Math.random()*anecdotes.length)
    setSelected(randAnecdote);
  }
  const changePoints = () => {
      let copy = [...points]
      copy[selected] = isNaN(copy[selected]) ? 1 : copy[selected] + 1
      setPoints(copy)
      const max = Math.max(...copy);
      const index = copy.indexOf(max);
      setMaxpoints(index)
  }

  return (
      <div>
        <h2>Anecdote of the day</h2>
        <div>
          {anecdotes[selected]}
        </div>
        <div>{isNaN(points[selected]) ? 0 : points[selected]} votes</div>
        <button onClick={changePoints}>Vote</button>
        <button onClick={nextAnecdote}>Next anecdote</button>
          <h2>Anecdote with max votes</h2>
          <div>{maxpoints >= 0 ? anecdotes[maxpoints] : ''}</div>
          <div>has {points[maxpoints]} votes</div>
      </div>
  )
}

export default App;
