import Header from "../Header/Header";
import Content from "../Content/Content";

const Course = (props) => {
    console.log(props.course)
  return (
      <div>
        <Header title={props.course.name}/>
        <Content parts={props.course.parts}/>
      </div>
  )
}

export default Course