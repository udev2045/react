/* Course.jsx was created 03.09.2023 22:42 */
import Header from "../Header/Header.jsx";
import Content from "../Content/Content.jsx";
import Total from "../Total/Total.jsx";

const Course = ({course}) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}
export default Course;