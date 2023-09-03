/* Total.jsx was created 01.09.2023 23:24 */
import css from "./Total.module.css"

const Total = ({parts}) => {
    let exercises = parts.map(part => part.exercises)
    let sum = 0;
    for(let i = 0; i < exercises.length; i++) {
        sum += exercises[i];
    }
    return (
            <p>Number of exercises {sum}</p>
    )
}
export default Total;