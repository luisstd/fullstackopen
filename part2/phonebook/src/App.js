import { useState } from 'react'
import Filter from './Filter'
import Form from './Form'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  function handleNameChange(event) {
    setNewName(event.target.value)
  }

  function handleNumberChange(event) {
    setNewNumber(event.target.value)
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  const filteredPersons =
    searchTerm === ''
      ? persons
      : persons.filter((person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()))

  function addPerson(event) {
    event.preventDefault()
    let existingPerson = persons.find((element) => element.name === newName)

    if (existingPerson) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const person = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(person))
    }
  }

  return (
    <>
      <h2>Phonebook</h2>

      <Filter searchTerm={searchTerm} handleSearch={handleSearch} />

      <Form
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />

      <Persons filteredPersons={filteredPersons} />
    </>
  )
}

export default App
