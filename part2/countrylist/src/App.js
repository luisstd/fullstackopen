import { useEffect, useState } from 'react'
import { Country } from './components/Country'
import axios from 'axios'
import { CountryList } from './components/CountryList'

function App() {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  function handleSearch(event) {
    setSearchTerm(event.target.value)
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toString().toLowerCase()),
      ),
    )
  }

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data)
    })
  }, [])

  return (
    <>
      find countries
      <input
        type='text'
        placeholder='Type country name'
        value={searchTerm}
        onChange={handleSearch}
      />
      <br />
      {filteredCountries.length === 1 ? (
        <Country country={filteredCountries[0]} />
      ) : filteredCountries.length >= 10 ? (
        <span>Too many matches, please specify your filter</span>
      ) : (
        <CountryList countries={filteredCountries} />
      )}
    </>
  )
}

export default App
