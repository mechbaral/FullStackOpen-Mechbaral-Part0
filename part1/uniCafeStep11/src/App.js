import { useState } from 'react'

const Button = ({onClick,text})=><button onClick={onClick}>{text}</button>



const StatisticLine =({good, neutral, bad,total})=>{
  if(total>0){
    return(
          <>
          <p>average {(good-bad)/total}</p>
          <p>positive {(good/total)*100} %</p>
          </>
          )
    }
else{
  return(
  <>
  <p>No feedback given yet</p>
  </>
  )
}
}

const Statistics = ({good, neutral, bad,total})=>{

  return( 
 
    <>
      <h1>statistic</h1>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td> {good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td> {neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td> {bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td> {total}</td>
          </tr>
        </tbody>
      </table>
    </>)
  }


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const stateChange = (state,setState)=>()=>setState(state+1)
  const total = good+neutral+bad


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={stateChange(good,setGood)} text="good">good</Button>
      <Button onClick={stateChange(neutral,setNeutral)} text="neutral">netural</Button>
      <Button onClick={stateChange(bad,setBad)} text="bad">bad </Button>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}></Statistics> 
      <StatisticLine good={good} neutral={neutral} bad={bad} total={total}></StatisticLine>
    </div>
  )
}

export default App