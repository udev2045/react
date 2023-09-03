/* Content.jsx was created 01.09.2023 23:20 */
import css from "./Content.module.css"
import Part from "./Part/Part.jsx";

const Content = (props) => {
    return (
        <>
            <Part part={props.part[0]}/>
            <Part part={props.part[1]}/>
            <Part part={props.part[2]}/>
        </>
    )
}
export default Content;