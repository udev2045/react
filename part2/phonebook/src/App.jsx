import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')

    const handlerNewName = () => {
        setNewName(event.target.value)
    }
    const handlerAddName = (event) => {
        event.preventDefault()
        let newPerson = {name: newName}
        setPersons( persons.concat(newPerson) )
        setNewName('')
    }
    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handlerAddName}>
                <div>
                    name: <input value={newName} onChange={handlerNewName}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            { persons.map( person => <div key={person.name}>{person.name}</div>) }
        </div>
    )
}

export default App