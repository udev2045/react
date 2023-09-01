/* Total.jsx was created 01.09.2023 23:24 */
import css from "./Total.module.css"

const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
        </>
    )
}
export default Total;