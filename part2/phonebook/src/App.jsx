import { useState } from 'react'
import Filter from "./Components/Filter/Filter.jsx";
import PersonForm from "./Components/PersonForm/PersonForm.jsx";
import Persons from "./Components/Persons/Persons.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newSearch, setNewSearch] = useState('')

    const handlerNewName = (event) => {
        setNewName(event.target.value)
    }
    const handlerNewPhone = (event) => {
        setNewPhone(event.target.value)
    }
    const handlerNewSearch = (event) => {
        setNewSearch(event.target.value)
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
        let id = persons.length + 1
        let newPerson = {
            name: newName,
            number: newPhone,
            id: id
        }
        setPersons( persons.concat(newPerson) )
        setNewName('')
        setNewPhone('')
    }
    return (
        <div>
            <h2>Phonebook</h2>
            <Filter newSearch={newSearch} handlerNewSearch={handlerNewSearch}/>
            <h2>Add a new</h2>
            <PersonForm handlerAddName={handlerAddName} newName={newName} handlerNewName={handlerNewName} newPhone={newPhone} handlerNewPhone={handlerNewPhone}/>
            <h2>Numbers</h2>
            <Persons newSearch={newSearch} persons={persons}/>
        </div>
    )
}

export default App