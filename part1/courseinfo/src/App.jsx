import Header from "./components/Header/Header.jsx";
import Content from "./components/Content/Content.jsx";
import Total from "./components/Total/Total.jsx";

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
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
    }

    return (
        <div>
            <Header course={course.name} />
            <Content part={course.parts}/>
            <Total part={course.parts}/>
        </div>
    )
}

export default App