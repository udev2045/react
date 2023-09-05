/* Persons.jsx was created 05.09.2023 20:10 */
import css from "./Persons.module.css"

const Persons = ({newSearch, persons}) => {
    let allPersons = persons.map( person => <div key={person.id}>{person.name} {person.number}</div>)
    let filteredPersons = persons.filter(person => person.name.toLowerCase().indexOf(newSearch.toLowerCase()) >= 0)
    let filteredResults = filteredPersons.map( person => <div key={person.id}>{person.name} {person.number}</div>)
    return (
        <div>
            { newSearch === '' ? allPersons : filteredResults}
        </div>
    )
}
export default Persons;