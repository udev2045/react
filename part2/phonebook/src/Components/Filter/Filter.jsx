/* Filter.jsx was created 05.09.2023 20:04 */
import css from "./Filter.module.css"

const Filter = ({newSearch, handlerNewSearch}) => {
    return (
        <div>
            filter shown with: <input value={newSearch} onChange={handlerNewSearch}/>
        </div>
    )
}
export default Filter;