import { useState, useEffect } from 'react'
import './index.css'

import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'
import Notification from './components/Notification'

import PersonService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])

  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState('')

  useEffect(() => {
    PersonService.getAll().then((persons) => {
      setPersons(persons)
    })
  }, [])

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

  function handleDelete(id) {
    if (window.confirm('Do you really want to delete this person?')) {
      PersonService.deletePerson(id)
      window.location.reload()
    }
  }

  const filteredPersons =
    searchTerm === ''
      ? persons
      : persons.filter((person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()))

  function addPerson(event) {
    event.preventDefault()
    let existingPerson = persons.find((element) => element.name === newName)

    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`,
        )
      ) {
        const person = {
          name: newName,
          number: newNumber,
        }

        PersonService.updatePerson(existingPerson.id, person)
          .catch(() => {
            setMessageType('error')
            setMessage(`'${person.name}' has already been removed from the server`)

            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
          .then((person) => {
            setPersons(
              persons.map((previousPerson) =>
                previousPerson.id !== person.id ? previousPerson : person,
              ),
            )

            setMessageType('success')
            setMessage(`Number '${person.number}' was updated successfully`)

            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
      }
    } else {
      const person = {
        name: newName,
        number: newNumber,
      }

      PersonService.createPerson(person).then((person) => setPersons(persons.concat(person)))

      setMessageType('success')
      setMessage(`Person '${person.name}' was added successfully`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  return (
    <>
      <h2>Phonebook</h2>

      <Notification message={message} messageType={messageType} />

      <Filter searchTerm={searchTerm} handleSearch={handleSearch} />

      <Form
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />

      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete} />
    </>
  )
}

export default App
