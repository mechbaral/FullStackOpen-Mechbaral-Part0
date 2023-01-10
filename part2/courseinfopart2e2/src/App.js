const Total = (props)=>{
  const {arraytotal} = props
  return(
        <div><b>total of {(arraytotal.reduce((a,v)=> a=a+v.exercises,0))} exercises</b></div>
    )
}

const Part =(props)=>{
  const {part}=props
  return(
  <p>
    {part.name} {part.exercises}
  </p>
  )
}


const Content=(props)=>{
  const {content}=props
  return ( <div>
    {content.map(part => <Part key={part.id}  part={part} />)}
  </div>)
}
const Header=(props)=>{
  const {header}=props
  return<div><h1>{header}</h1></div>
}

const Course = (props)=>{
  const {course}= props
  // const check=toString(console.log(typeof(course)))
  return (
    <div>
      <Header header ={course.name} />
      <Content content ={course.parts} />
      <Total arraytotal={course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course}/>
}

export default App;