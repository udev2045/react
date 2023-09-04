import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            phone: '097 777 77 77'
        }
    ])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')

    const handlerNewName = (event) => {
        setNewName(event.target.value)
    }
    const handlerNewPhone = (event) => {
        setNewPhone(event.target.value)
    }
    const handlerAddName = (event) => {
        event.preventDefault()
        const existPerson = persons.filter(function (person) {
            return person.name === newName;
        });
        if(existPerson.length) {
            alert(`${newName} is already added to phonebook`)
            return
        }
        let newPerson = {
            name: newName,
            phone: newPhone
        }
        setPersons( persons.concat(newPerson) )
        setNewName('')
        setNewPhone('')
    }
    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handlerAddName}>
                <div>
                    name: <input value={newName} onChange={handlerNewName}/>
                </div>
                <div>
                    number: <input value={newPhone} onChange={handlerNewPhone}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            { persons.map( person => <div key={person.name}>{person.name} {person.phone}</div>) }
        </div>
    )
}

export default App