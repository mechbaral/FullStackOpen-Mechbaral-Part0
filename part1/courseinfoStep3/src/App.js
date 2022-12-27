const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <p>The course name is {course} </p>
      <p>The first part of the course is {part1.name} and there are {part1.exercises} exercises in this part</p>
      <p>The second part of the course is {part2.name} and there are {part2.exercises} exercises in this part</p>
      <p>The third part of the course is {part3.name} and there are {part3.exercises} exercises in this part</p>
    </div>
  )
}

export default App