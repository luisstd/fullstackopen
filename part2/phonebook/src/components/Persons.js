const Persons = (props) => {
  return (
    <>
      <h2>Numbers</h2>
      {props.filteredPersons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}{' '}
          <button onClick={() => props.handleDelete(person.id)}>delete</button>
        </p>
      ))}
    </>
  )
}

export default Persons
