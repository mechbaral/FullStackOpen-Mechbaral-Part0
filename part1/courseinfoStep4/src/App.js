const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <p>The Course name is {course} </p>
      <p>The first part of the course is {parts[0].name} and there are {parts[0].exercises} exercises in this part</p>
      <p>The second part of the course is {parts[1].name} and there are {parts[1].exercises} exercises in this part</p>
      <p>The third part of the course is {parts[2].name} and there are {parts[2].exercises} exercises in this part</p>
    </div>
  )
}

export default App