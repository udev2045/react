/* Content.jsx was created 01.09.2023 23:20 */
import css from "./Content.module.css"
import Part from "./Part/Part.jsx";

const Content = ({parts}) => {
    return (
        <>
            {parts.map(part => <Part key={part.id} part={part}/> )}
        </>
    )
}
export default Content;