import { useState, useEffect } from 'react'
import axios from "axios";
import Filter from "./Components/Filter/Filter.jsx";
import PersonForm from "./Components/PersonForm/PersonForm.jsx";
import Persons from "./Components/Persons/Persons.jsx";
import personService from "./services/Persons.js"

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newSearch, setNewSearch] = useState('')

    useEffect( () => {
        personService.getAll()
            .then(response => {
                setPersons(response)
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
            if (window.confirm(`${existPerson[0].name} is already added to phonebook, replace the old number with a new one?`)) {
                const updatePerson = {
                    name: existPerson[0].name,
                    number: newPhone,
                    id: existPerson[0].id
                }
                personService.update(existPerson[0].id, updatePerson)
                setPersons(persons.map(person => person.name === existPerson[0].name ? { ...person, number: newPhone } : person ))
            }
            return
        }
        let id = persons.length + 1
        let newPerson = {
            name: newName,
            number: newPhone,
            id: id
        }
        setPersons( persons.concat(newPerson) )
        personService.create(newPerson)

        setNewName('')
        setNewPhone('')
    }
    const deletePerson = (person) => {
        if(person.id) {
            return () => {
                if (window.confirm(`Delete ${person.name}?`)) {
                    personService.remove(person.id)
                        .then(response => {
                            let filteredPersons = persons.filter(function (p) {
                                return p.id !== person.id;
                            })
                            setPersons(filteredPersons)
                        })
                }
            }
        }
        return ''
    }
    return (
        <div>
            <h2>Phonebook</h2>
            <Filter newSearch={newSearch} handlerNewSearch={handlerNewSearch}/>
            <h2>Add a new</h2>
            <PersonForm handlerAddName={handlerAddName} newName={newName} handlerNewName={handlerNewName} newPhone={newPhone} handlerNewPhone={handlerNewPhone}/>
            <h2>Numbers</h2>
            <Persons newSearch={newSearch} persons={persons} deletePerson={deletePerson}/>
        </div>
    )
}

export default App