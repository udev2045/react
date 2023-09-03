/* Total.jsx was created 01.09.2023 23:24 */
import css from "./Total.module.css"

const Total = ({parts}) => {
    const total = parts.reduce((s, p) => {
        return  s + p.exercises
    }, 0)
    return (
            <p>Number of exercises {total}</p>
    )
}
export default Total;