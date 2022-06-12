import { useState } from 'react'
import { Country } from './Country'

function CountryList({ countries }) {
  const [countryIndex, setCountryIndex] = useState([])
  const [isSingleCountryShown, setSingleCountryShown] = useState(false)

  function showCountry(index) {
    setCountryIndex(index)
    setSingleCountryShown(true)
  }

  return (
    <ul>
      {!isSingleCountryShown ? (
        countries.map((country, index) => (
          <li key={country.name.common}>
            <span>{country.name.common} </span>
            <button onClick={() => showCountry(index)}>Show</button>
          </li>
        ))
      ) : (
        <Country country={countries[countryIndex]} />
      )}
    </ul>
  )
}

export { CountryList }
