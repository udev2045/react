/* PersonForm.jsx was created 05.09.2023 20:07 */
import css from "./PersonForm.module.css"

const PersonForm = (props) => {
    return (
        <form onSubmit={props.handlerAddName}>
            <div>
                name: <input value={props.newName} onChange={props.handlerNewName}/>
            </div>
            <div>
                number: <input value={props.newPhone} onChange={props.handlerNewPhone}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}
export default PersonForm;