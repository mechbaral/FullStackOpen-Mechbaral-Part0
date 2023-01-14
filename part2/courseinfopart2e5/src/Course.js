const Total = (props) => {
    const { arraytotal } = props
    return (
  
      <div><b>total of {(arraytotal.reduce((a, v) => a = a + v.exercises, 0))} exercises</b></div>
    )
  }
  
  const Part = (props) => {
    const { part } = props
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }
  
  
  const Content = (props) => {
    const { content } = props
    return (<div>
      {content.map(part => <Part key={part.id} part={part} />)}
    </div>)
  }
  const Header = (props) => {
    const { header } = props
    return <div>
      <h1>{header}</h1></div>
  }
  
  const Course = (props) => {
    const { course } = props
    return (
      <div>
        <Header header={course.name} />
        <Content content={course.parts} />
        <Total arraytotal={course.parts} />
      </div>
    )
  }
  const CourseName = (props) => {
    const { array1 } = props
    return (<div>
      {array1.map(arrayContent => <Course key={arrayContent.id} course={arrayContent} />)}
    </div>)
  }

  export default CourseName;