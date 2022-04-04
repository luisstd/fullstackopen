import { useState } from 'react'

const DailyAnectode = ({ anecdotes, votes }) => {
  return (
    <>
      <h2>Anectode of the Day</h2>
      {anecdotes}
      <p>has {votes} votes</p>
    </>
  )
}

const VotedAnecdote = ({ anecdote, votes }) => {
  return (
    <>
      <h2>Anectode with the most votes</h2>
      {anecdote}
      <p>has {votes} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(new Uint8Array(7))

  const randomizeAnecdote = () => {
    let random = Math.floor(Math.random() * Math.floor(anecdotes.length - 1))
    setSelected(random)
  }

  const voteAnecdote = () => {
    const copy = Array.from([...votes])
    copy[selected] += 1
    setVote(copy)
  }

  const highestVoting = Math.max(...votes)

  const mostVotedAnectdote = anecdotes[votes.indexOf(highestVoting)]

  return (
    <>
      <DailyAnectode anecdotes={anecdotes[selected]} votes={votes[selected]} />
      <button onClick={voteAnecdote}>Vote</button>
      <button onClick={randomizeAnecdote}>Next anecdote</button>
      <VotedAnecdote anecdote={mostVotedAnectdote} votes={highestVoting} />
    </>
  )
}

export default App
