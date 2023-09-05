import { useState, useEffect } from 'react'
import axios from "axios";
import Filter from "./Components/Filter/Filter.jsx";
import PersonForm from "./Components/PersonForm/PersonForm.jsx";
import Persons from "./Components/Persons/Persons.jsx";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newSearch, setNewSearch] = useState('')

    useEffect( () => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
                console.log(response.data)
            })
    }, [])

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