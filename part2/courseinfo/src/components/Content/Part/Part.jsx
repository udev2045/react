/* Part.jsx was created 01.09.2023 23:29 */
import css from "./Part.module.css"

const Part = (props) => {
    return (
        <>
            <p>
                {props.part.name} {props.part.exercises}
            </p>
        </>
    )
}
export default Part;