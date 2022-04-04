import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>
          <strong>{text}</strong>
        </td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100 + '%'

  if (all) {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th colSpan='1'>Statistics</th>
            </tr>
          </thead>
          <tbody>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='all' value={all} />
            <StatisticLine text='average' value={average} />
            <StatisticLine text='positive' value={positive} />
          </tbody>
        </table>
      </>
    )
  }
  return <p>No feedback given</p>
}

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onGood = () => setGood(good + 1)
  const onNeutral = () => setNeutral(neutral + 1)
  const onBad = () => setBad(bad + 1)

  return (
    <>
      <h1>Give feedback</h1>

      <Button onClick={onGood} text='good' />
      <Button onClick={onNeutral} text='neutral' />
      <Button onClick={onBad} text='bad' />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
