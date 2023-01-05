import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, totalReview] = useState(0)

  const handleGoodClick = () =>{
    handleTotalReview(total+1)
    setGood(good + 1)
  }
  
  const handleNeturalClick = () =>{
    handleTotalReview(total+1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () =>{
    handleTotalReview(total+1)
    setBad(bad + 1)
  }

  const handleTotalReview = ()=>{
    totalReview(total+1)
  }


  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeturalClick}>netural</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>netural {neutral}</p>
      <p>bad {bad}</p>
      <p >all {total}</p>
      <p>average {(good-bad)/total}</p>
      <p>positive {(good/total)*100} %</p>
    </div>
  )
}

export default App