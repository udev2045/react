import { useState } from 'react'

const TableWrapper = (props) => {
    return (
        <table>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}

const Button = ({text, handler}) => {
    return (
        <button onClick={handler}>{text}</button>
    )
}
const StatisticLine = ({text, value}) => {
    return (<tr><td>{text}</td><td>{value}</td></tr>)
}
const Statistics = ({good, neutral, bad}) => {
    let total = good + bad + neutral;
    if(!total) {
        return (<p>No feedback given</p>)
    }
    return (
        <>
            <h1>Statistic</h1>
            <TableWrapper>
                <StatisticLine text="Good" value ={good} />
                <StatisticLine text="Neutral" value ={neutral} />
                <StatisticLine text="Bad" value ={bad} />
                <StatisticLine text="All" value ={total} />
                <StatisticLine text="Average" value ={(good - bad) / total} />
                <StatisticLine text="Positive" value ={((good / total) * 100) +'%'} />
            </TableWrapper>
        </>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => { setGood(good + 1) }
    const handleNeutral = () => { setNeutral(neutral + 1) }
    const handleBad = () => { setBad(bad + 1) }
    return (
        <>
            <h1>Give feedback</h1>
            <div>
                <Button text="Good" handler={handleGood}/>
                <Button text="Neutral" handler={handleNeutral}/>
                <Button text="Bad" handler={handleBad}/>
            </div>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </>
    )
}

export default App