/* Total.jsx was created 01.09.2023 23:24 */
import css from "./Total.module.css"

const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
        </>
    )
}
export default Total;