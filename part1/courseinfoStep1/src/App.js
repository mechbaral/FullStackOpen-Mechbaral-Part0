const Header = (props) =>{

  return(
    <div>This is a course {props.course}</div>
  )
}

const Content = (props) =>{

  return(
    <div>The content {props.name} has total exercise {props.number}</div>
  )
}

const Total = (props) =>{

  return(
    <div>So the total exercises in this course is {props.total} </div>
  )
}

const App = () => {

  return (
    <div>
      <Header course = 'Half Stack application development' />
      <Content name='Fundamentals of React ' number='10'/>
      <Content name='Using props to pass data' number='7'/>
      <Content name='Fundamentals of React ' number='14'/>
      <Total total={10+7+14} />
    </div>
  )
}

export default App