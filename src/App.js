import React, { useState } from 'react';
import './App.css';



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is the same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const randomAnecdote = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleNextAnecdote = () => {
    setSelected(randomAnecdote(0, anecdotes.length - 1));
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };


  const maxVotes = Math.max(...votes);
  const mostVotedAnecdotes = anecdotes.filter((_, index ) => votes[index] === maxVotes);

  
  return (
    <div>
      <div>
        <button onClick={handleNextAnecdote}>Next Anecdote</button>
        <button onClick={handleVote}>Vote</button>
       
      </div>
      <p>{anecdotes[selected]}</p>
      <p> has {votes[selected]} votes</p>

      <h2>anecdote with the Most Votes </h2>
 { mostVotedAnecdotes.map((anecdote, index)=>(
  <p key={index}> {anecdote}</p>
 ))}

    </div>
  );
};

export default App;
