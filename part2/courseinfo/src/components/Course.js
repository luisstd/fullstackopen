const Header = ({ name }) => <h1>{name}</h1>

const Total = ({ parts }) => {
  let initialSum = 0
  let sum = parts.reduce((sum, parts) => sum + parts.exercises, initialSum)

  return (
    <p>
      <strong>Total of {sum} exercises </strong>
    </p>
  )
}

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Content = ({ parts }) => (
  <>
    {parts.map((item, index) => {
      return <Part key={item.id} part={parts[index]} />
    })}
  </>
)

const Course = ({ courses }) => {
  return courses.map((course) => (
    <div key={course.id}>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  ))
}

export default Course
