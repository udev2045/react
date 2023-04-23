import { useState } from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)
const StatisticLine = ({text, value}) => {
    return (
        <tr><td>{text}</td><td>{value}</td></tr>
    )
}
const Table = (props) => {
  return (
      <table>
          <tbody>
          {props.children}
          </tbody>
      </table>
  )
}
const Statistics = ({good, neutral, bad}) => {
    let total = good + neutral + bad;
    if(total > 0) {
        return (
            <div>
                <h2>Statistic:</h2>
                <Table>
                    <StatisticLine text="Good" value={good} />
                    <StatisticLine text="Neutral" value={neutral} />
                    <StatisticLine text="Bad" value={bad} />
                    <StatisticLine text="Total" value={total} />
                    <StatisticLine text="Average" value={(good - bad)/total} />
                    <StatisticLine text="Positive" value={(good*100/total) + '%'} />
                </Table>
            </div>
        )
    }
    return (
        <div>No feedback given</div>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
      <div>
          <h2>Give feedback</h2>
          <Button handleClick={() => {setGood(good + 1)}} text="Good"/>
          <Button handleClick={() => {setNeutral(neutral + 1)}} text="Neutral"/>
          <Button handleClick={() => {setBad(bad + 1)}} text="Bad"/>
          <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
  )
}

export default App
