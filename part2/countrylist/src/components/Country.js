import { useState, useEffect } from 'react'
import axios from 'axios'

function Country({ country }) {
  const API_KEY = process.env.REACT_APP_API_KEY

  const [weather, setWeather] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&units=metric&appid=${API_KEY}`,
      )

      .then((response) => {
        setWeather(response.data)
      })
  }, [country, API_KEY])

  return (
    <>
      <h1>{country.name.common} </h1>
      <strong> Capital: </strong>
      <span>{country.capital[0]} </span>
      <br />
      <strong> Area: </strong>
      <span>{country.area} </span>
      <br />
      <strong> Languages: </strong>
      <span>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </span>
      <br />
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
      <br />
      <h1>Current Weather in {country.capital}</h1>
      {weather.main && (
        <>
          <strong>Temperature: </strong> <span>{weather.main.temp} °C</span>
          <br />
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt={`Current weather in ${country.capital}`}
            width='100px'
            height='auto'
          />
          <br />
          <strong>Wind: </strong> <span>{weather.wind.speed} m/s</span>
        </>
      )}
    </>
  )
}

export { Country }
