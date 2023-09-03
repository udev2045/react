import { useState } from 'react'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    let total = good + bad + neutral;
    const handleGood = () => { setGood(good + 1) }
    const handleNeutral = () => { setNeutral(neutral + 1) }
    const handleBad = () => { setBad(bad + 1) }
    return (
        <>
            <h1>Give feedback</h1>
            <div>
                <button onClick={handleGood}>Good</button>
                <button onClick={handleNeutral}>Neutral</button>
                <button onClick={handleBad}>Bad</button>
            </div>
            <h1>Statistic</h1>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>All: {total}</p>
            <p>Average: {(good - bad) / total}</p>
            <p>Positive: {(good / total) * 100}%</p>
        </>
    )
}

export default App