const Content=(props)=>{
  const {content}=props
  return (
          <div>
         
              <p>{content[0].name} {content[0].exercises} </p>
              <p>{content[1].name} {content[1].exercises} </p>
              <p>{content[2].name} {content[2].exercises} </p>
     
          </div>
        );
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
